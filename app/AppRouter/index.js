
import RouterScene from '../Constant/constant'

import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
import styles from './styles';
import {
    animationStyle,
    platformBasedPanHandlers,
    renderTitle,
} from '../Reusables/Router';
import withConnect, {  ReduxRouter } from './withConnect';
const {

    MAIN_CONTENT,
    AUTHENTICATION,
    LOG_IN,
    ROOT_SCENE,
    SIGN_UP,
    FORGET_PASSWORD,
    INTRO_SLIDES,
    WRAPPER_KEY_SUFFIX,
    NAVIGATOR_KEY_SUFFIX,
    TABS_KEY_SUFFIX,
    CONTENT_KEY_SUFFIX,
    REGISTRATION_ONE,
    REGISTRATION_TWO,
    REGISTRATION_THREE,

    DASH_BOARD,
    CHAT_SCREEN,
    EXPLORE_SCREEN,
    OPEN_SCREEN,
    PROFILE_SCREEN,
} = RouterScene;

import React from "react"
import LoginScene from '../Components/Authentication/logInView/LoginScene'
import LoginScreen from '../pages/login/LoginScreen';
import SignupScreen from '../pages/signup/SignupScreen';
import ForgotScreen from '../pages/forgot/ForgotScreen';
import TutorialScreen from '../TutorialScreen';
import RegistrationPageOne from '../pages/signup/RegistrationPageOne'
import RegistrationPageTwo from '../pages/signup/RegistrationPageTwo'
import RegistrationPageThree from '../pages/signup/RegistrationPageThree'

import TabIcon from '../pages/Component/TabIcons/TabIcon'
import DashBoardScreen from '../pages/dashboard/DashboardScreen'
import ChatScreen from '../pages/chatroom/ChatScreen'
import ExploreScreen from '../pages/explore/ExploreScreen'
import PlusScreen from '../pages/Plus/PlusScreen'
import ProfileScreen from "../pages/Profile/ProfileScreen"

import BottomToolbar from '../pages/Component/Toolbars/BottomToolbar'

import LeftDrawer from '../Components/dashboard/Drawer/LeftDrawer'

const sceneSelector = props => {

    return TutorialScreen
};

const backButtonImage = "";

class AppRouter extends React.PureComponent{

    constructor(props){
        super(props)
    }

    get navigatorProps() {
        return {
            //backButtonImage,
            //drawerImage,
            //renderTitle,
            leftButtonStyle: styles.navButton,
            leftButtonIconStyle: styles.backButtonImage,
            rightButtonIconStyle: styles.backButtonImage,
            navigationBarStyle: styles.navBar,
            sceneStyle: styles.navScenes,
            titleStyle: styles.navTitle,

        };
    }

    componentDidMount() {
        Actions.refresh({key: 'drawer', ref: this.refs.navigation})
    }

    get authNavigatorProps() {
        return {
            ...this.navigatorProps,
            drawerImage: null,
            barButtonIconStyle: styles.backButtonImage,
            navigationBarStyle: [styles.navBar, styles.authNavBar],
        };
    }
    get routerProps() {
        return {
            animationStyle,
            onAuthorize: this.onAuthorize,
            passProps: true,
        };
    }

    render(){
        const sideMenuProps = { component: DashBoardScreen, sideMenuOpen: false };
        const mainContentProps = {

            forMember: null,
            hideTabBar: true,
            tabs: true,
            sceneStyle: styles.tabScenes,
        };
        return( <ReduxRouter {...this.routerProps}>
            <Scene unmountScenes key={ROOT_SCENE} component={Modal} selector={sceneSelector}>
                <Scene key={AUTHENTICATION} {...this.authNavigatorProps}>
                    <Scene component={TutorialScreen} hideNavBar key={INTRO_SLIDES} />
                    <Scene component={SignupScreen}  hideNavBar key={SIGN_UP} />
                    <Scene component={LoginScreen}  hideNavBar key={LOG_IN} />
                    <Scene component={ForgotScreen} hideNavBar key={FORGET_PASSWORD} />
                    <Scene component={RegistrationPageOne} hideNavBar key={REGISTRATION_ONE} />
                    <Scene component={RegistrationPageTwo} hideNavBar key={REGISTRATION_TWO} />
                    <Scene component={RegistrationPageThree} hideNavBar key={REGISTRATION_THREE} />
                </Scene>

                <Scene  hideNavBar drawer drawerPosition={'left'} contentComponent={LeftDrawer}>
                    <Scene key={MAIN_CONTENT} hideNavBar tabs tabBarStyle={{backgroundColor: 'black'}} tabBarPosition={'bottom'} tabBarComponent={BottomToolbar}>
                        <Scene key={DASH_BOARD} hideNavBar component={DashBoardScreen} />
                        <Scene key={CHAT_SCREEN} hideNavBar component={ChatScreen} />
                        <Scene key={OPEN_SCREEN} hideNavBar component={PlusScreen} />
                        <Scene key={EXPLORE_SCREEN} hideNavBar component={ExploreScreen} modal/>
                        <Scene key={PROFILE_SCREEN} hideNavBar component={ProfileScreen} />
                    </Scene>
                </Scene>
            </Scene>
        </ReduxRouter>)
    }
}
export default withConnect(AppRouter);
