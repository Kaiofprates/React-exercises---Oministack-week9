import { createAppContainer, createSwitchNavigator} from 'react-navigation'
import Login from './Login';
import List from './List';
import Book from './Book';


const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Login,
            List,
            Book
        }
       
    )
);

export default Routes; 