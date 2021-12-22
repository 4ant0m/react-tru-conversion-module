import TruConversion from '../TruConversion'

describe('TruConversion', () => {
  it('should render truconversion', () => {
    TruConversion.initialize({id: 'tl-js', scriptIdUrl: 'dsdas/das'})
    expect(window._tip).toEqual([])
  })

  it('should render datalayer', () => {
    const Args = {
      id: 'tl-js',
      scriptIdUrl: 'ddads/dasd',
      dataLayer: {
        userInfo: 'userInfo'
      }
    }
    TruConversion.initialize(Args)
    expect(window._tip).toEqual([])
  })
})