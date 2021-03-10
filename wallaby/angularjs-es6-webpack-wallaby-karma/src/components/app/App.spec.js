describe('Component: CardPractice', () => {
  let $compile, $rootScope
  let element

  beforeEach(angular.mock.module('app'))
  beforeEach(
    angular.mock.inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_
      $rootScope = _$rootScope_
    })
  )

  beforeEach(() => {
    element = $compile('<App>')($rootScope)
    $rootScope.$digest()
  })

  it('should say hello to the world', () => {
    expect(element.find('div').text()).toEqual('Hello, World!')
  })
})
