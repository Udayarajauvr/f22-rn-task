import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Signup from '../components/Signup';
import LoginForm from '../components/LoginForm';
import Feed from '../feedpic/Feed';

const HomeScreenNavigator = createStackNavigator({
       SignupForm : Signup , 
    Home : {
        LoginForm : LoginForm
    },
    ImageFeed : Feed
});

export default createAppContainer(MealsNavigator);