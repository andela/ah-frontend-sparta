import reducer from '../signupSignupReducer';

describe('signupSigninReducer', () => {
  it('should return default state', () => {
    expect(
      reducer([], {
        type: 'default',
      }),
    ).toEqual([]);
  });
});
