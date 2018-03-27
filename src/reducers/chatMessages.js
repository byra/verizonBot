import {v4} from "uuid";

export const chatMessages = (state = [], action) => {
    let userResponse = null;
    let customRequest = null;
    switch (action.type) {

        case "start":
            userResponse = null;
            customRequest = null;
            let time = new Date();
            if (action.payload !== null) {
                time = action.payload.tracker.latest_event_time;
                if (action.payload.tracker.latest_message.text === "Main Menu") {
                    userResponse = action.payload.tracker.latest_message.text;
                } else {
                    customRequest = action.payload.tracker.latest_message.text;
                }
            }
            return [
                ...state,
                {
                    time: time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Welcome to  Verizon Technical Support! My name is Viva."],
                    response: "What can I help you with today?",
                    buttons: ["Phones", "Plans", "Deals", "Manage Account"]
                }
            ];
        case "Greeting":
            userResponse = null;
            customRequest = action.payload.tracker.latest_message.text;
            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    reply: ["Hello there"],
                    response: "I can help you with the following",
                    url: null,
                    buttons: ["Phones", "Plans", "Deals", "Manage Account"]
                }
            ];
        case "Bye":
            userResponse = null;
            customRequest = action.payload.tracker.latest_message.text;
            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    reply: ["Its my pleasure assisting today"],
                    response: "For other queries click on Main Menu.",
                    url: null,
                    buttons: ["Main Menu"]
                }
            ];


        case "Phones":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Phones") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["I can surely help you with Phones"],
                    response: "Please choose a category",
                    buttons: ["Smart Phone", "Basic Phone", "Pre-owned"]
                }
            ];
        case "Smart Phones":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Smart Phone") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our popular smart phones"],
                    response: "Please select one of the following for more information",
                    cardDetails:[{title:"Iphone X", imageURL:"https://goo.gl/Eqx6g6", info:"64GB", url:"https://www.verizonwireless.com/smartphones/apple-iphone-x/", price:"$41.66/mo",rating:5, description:"Contract for 24 months"}, {title:"Galaxy S9", imageURL:"https://goo.gl/PCt3iT", info:"64GB", price:"$33.33/mo", url:"https://www.verizonwireless.com/smartphones/samsung-galaxy-s9/",rating:4, description:"Contract for 24 months"}],
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Basic Phones":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Basic Phones") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our popular basic phones"],
                    response: "Please select one of the following for more information",
                    cardDetails:[{title:"LG Exalt", imageURL:"https://goo.gl/ewxT3N",  info:"4GB", price:"$7.00/mo",rating:5, description:"Contract for 24 months"}, {title:"Kyocera Cadence", imageURL:"https://goo.gl/TyYpkY", price:"$5.00/mo",rating:5, description:"Contract for 24 months",info:"4GB"}],
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Pre-owned Phones":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Pre-owned Phones") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our best pre-owned phones"],
                    response: "Please select one of the following for more information",
                    cardDetails:[{title:"Iphone 6s", imageURL:"https://goo.gl/rMVSZH", price:"$12.49/mo", info:"16GB",rating:5, description:"Contract for 24 months"}, {title:"Iphone 6s Plus", imageURL:"https://goo.gl/CG6uBF", price:"$19.79/mo",info:"16GB",rating:5, description:"Contract for 24 months"}],
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];


        case "Plans":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Plans") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["I can surely help you with our plans"],
                    response: "Here are our popular pland",
                    buttons: ["Unlimited Plus", "Unlimited", "Limited"]
                }
            ];
        case "Unlimited Plus":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Unlimited Plus") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: "https://www.verizonwireless.com/plans/verizon-plan/",
                    reply: ["Here are our popular unlimited plus plans"],
                    response: "More can be found in the link below",
                    cardDetails:[{title:"One Line", imageURL:"https://goo.gl/Co3MCy", price:"$85.00/mo",info:"No Contract",rating:4, description:"Unlimited LTE 4G Data"}, {title:"Two Lines", imageURL:"https://goo.gl/Co3MCy", price:"$75.00/mo",info:"No Contract",rating:5, description:"Unlimited LTE 4G Data"}],
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Unlimited":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Unlimited") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: "https://www.verizonwireless.com/plans/verizon-plan/",
                    reply: ["Here are our popular unlimited plans"],
                    response: "More can be found in the link below",
                    cardDetails:[{title:"One Line", imageURL:"https://goo.gl/Co3MCy", price:"$75.00/mo",info:"No Contract",rating:5, description:"Unlimited Data"}, {title:"Two Lines", imageURL:"https://goo.gl/Co3MCy", price:"$65.00/mo", info:"No Contract",rating:5, description:"Unlimited Data"}],

                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Limited":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Limited") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: "https://www.verizonwireless.com/plans/verizon-plan/",
                    reply: ["Here are our popular limited plans"],
                    response: "More can be found in the link below",
                    cardDetails:[{title:"One Line", imageURL:"https://goo.gl/Co3MCy", price:"$55.00/mo", info:"No Contract",rating:5, description:"15GB of Data"}, {title:"Two Lines", imageURL:"https://goo.gl/Co3MCy", price:"$45.00/mo",info:"No Contract",rating:5, description:"15GB of Data"}],
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];


        case "Deals":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Deals") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["I can surely help you with our best deals"],
                    response: "Here are are our hot deals right now",
                    buttons: ["Apple Deals", "Android Deals", "Tablets Deals", "Accessories Deals"]
                }
            ];
        case "Apple Deals":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Apple Deals") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our popular deals on apple devices"],
                    response: "Please select one of the following for more information",
                    cardDetails:[{title:"Iphone X", imageURL:"https://goo.gl/e6hThs", price:"$41.66/mo", description:"Buy one get one free",info:"24 mo Contract",rating:5}, {title:"Iphone 8", imageURL:"https://goo.gl/Qpk1Ga", price:"$33.33/mo", description:"Buy one get one free",info:"24 mo Contract",rating:5}],
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Android Deals":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Android Deals") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our popular deals on android devices"],
                    response: "Please select one of the following for more information",
                    cardDetails:[{title:"Galaxy S9+", imageURL:"https://goo.gl/n9KRL1", price:"$38.74/mo", description:"Buy one get one free",info:"24 mo Contract",rating:5}, {title:"Galaxy S9", imageURL:"https://goo.gl/PCt3iT", price:"$33.33/mo", description:"Buy one get one free",info:"24 mo Contract",rating:4}],
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Tablets Deals":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Tablets Deals") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our popular deals on tablets"],
                    response: "Please select one of the following for more information",
                    cardDetails:[{title:"Ipad Pro", imageURL:"https://goo.gl/6SbxWn", price:"$32.49.00/mo", description:"Buy one get one free",info:"24 mo Contract",rating:5}, {title:"Galaxy Tab", imageURL:"https://goo.gl/d7wB3F", price:"$26.16/mo", description:"Buy one get one free",info:"24 mo Contract",rating:4}],
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Accessories Deals":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Accessories Deals") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Here are our popular deals on accessories"],
                    response: "Please select one of the following for more information",
                    cardDetails:[{title:"Apple Watch 3", imageURL:"https://goo.gl/ctNiXa", price:"$399.99", description:"Aluminum 38mm Case with Sport Band",info:"Build in LTE",rating:5}, {title:"Apple Watch 3", imageURL:"https://goo.gl/nX1nvP", price:"$429.99",description:"Aluminum 42mm Case with Sport Band",info:"Build in LTE",rating:5}],
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];



        case "Manage Account":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Manage Account") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Thank you, I can definitely help you out with Account."],
                    response: "Please describe your issue or question or Select a topic from frequently asked questions which can answer your question",
                    buttons: ["Username and Password", "Update Billing Information", "Update Contact Information", "Request Receipts"]
                }
            ];
        case "Username and Password":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Username and Password") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Don't remember your username or password? We've all been there.",
                        "Just visit My Account. Follow the \"forgot password\" link and enter the email address you use for your Verizon account.",
                        "Then, you'll receive an email with a recovery link. When you follow the link, you'll see your username and will have the option to reset your password. It's that simple!",
                        "Didn't receive the recovery email? You can check your spam folder, or try using a different email address."
                    ],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Update Billing Information":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Update Billing Information") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["You can update your billing information by following these steps","Log in to My Account and choose the “Update Billing Info” link on the left hand side. Make all the necessary changes and select \"Submit\".", "Your info is updated!"],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];

        case "Update Contact Information":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Update Contact Information") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["You can update your contact information through \"My Account\".",
                        "Log in to My Account and choose the “Update Contact Info” link on the left hand side. Make all the necessary changes and select \"Submit\".", "Your info is updated!"
                    ],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];
        case "Request Receipts":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Request Receipts") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }

            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    url: null,
                    reply: ["Verizon receipt preferences are managed through \"My Account\".",
                        "Login to My Account and select the “Update Contact Info” link on the left hand side.",
                        "Scroll down to the bottom of the page and select/deselect the checkbox beside \"I would like to receive email receipts for all charges to my credit card\"."
                    ],
                    response: "Indicate your response whether this was helpful or not",
                    buttons: ["Helpful", "Not Helpful"]
                }
            ];


        case "Helpful":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Helpful") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    reply: ["We are happy to have solve your issue today. For other queries click on Main Menu."],
                    response: "Thank you",
                    url: null,
                    buttons: ["Main Menu"]
                }
            ];
        case "Not Helpful":
            userResponse = null;
            customRequest = null;
            if (action.payload.tracker.latest_message.text === "Not Helpful") {
                userResponse = action.payload.tracker.latest_message.text;
            } else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    reply: ["What is your email address?"],
                    response: "We will get back to you soon on this issue.",
                    url: null,
                    buttons: []
                }
            ];
        case "EmailId":
            userResponse = null;
            customRequest = action.payload.tracker.latest_message.text;
            return [
                ...state,
                {
                    time: action.payload.tracker.latest_event_time,
                    userResponse: userResponse,
                    customRequest: customRequest,
                    reply: ["Your request has been submitted with ticket number " + v4()],
                    response: null,
                    url: null,
                    buttons: ["Main Menu"]
                }
            ];

        default:
            return state;
    }
};

