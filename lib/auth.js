AccountsTemplates.configure({
    // Behaviour
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: false,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: '',
    termsUrl: '',

    // Redirects
    homeRoutePath: '/dashboard',
    redirectTimeout: 4000,

    // Hooks
    //onLogoutHook: myLogoutFunc,
    //onSubmitHook: mySubmitFunc,

    // Texts
    texts: {
        button: {
            signUp: "Create Account"
        },
        socialSignUp: "",
        socialConfigure: "",
    },
});

AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');
AccountsTemplates.addFields([{
    _id: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 7,
}, {
    _id: 'email',
    type: 'email',
    required: true,
    displayName: "email",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'Invalid email',
}, {
    _id: 'username_and_email',
    type: 'text',
    required: true,
    displayName: "Login",
    placeholder: {
        signIn: "Username or Email"
    },
}, {
    _id: 'password',
    type: 'password',
    placeholder: {
        signUp: "At least six characters"
    },
}]);
