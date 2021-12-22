import Snippets from '../Snippets'

let args
let snippets

describe('Snippets', () => {
  beforeEach(() => {
    args = { id: 'GTM-abc123', scriptIdUrl: '/213312/sad.js'}
    snippets = Snippets.tags(args)
  })

  it('should use the `dataLayer` for the script', () => {
    args = { _tip: { name: 'test' }}
    snippets = Snippets.dataLayer(args)
    console.log(snippets)
    expect(snippets).toContain('{"name":"test"}')
  })

  it('no id provided should log a warn', () => {
      console.warn = jest.fn()
      const noIdArgs = { }
      Snippets.tags(noIdArgs)
      expect(console.warn).toBeCalled()
  })
})