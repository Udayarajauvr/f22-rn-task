import React, {Component} from 'react';
import {View , Text ,StyleSheet} from 'react-native';
import Drawer from 'react-native-drawer'; 

class sidebar extends Component {
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    render()
    {
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3, paddingTop: 50, flex: 1 },
            main: {paddingLeft: 3},
        }

        return (
            <Drawer
            type="static"
                content={
                    <View>
                        <Text>Order History</Text>
                        <Text>Account</Text>
                        <Text>Basket</Text>
                        <Text>About us</Text>
                    </View>
                }
                ref = {(ref) => this._drawer = ref}
                openDrawerOffset={200}
                styles={drawerStyles}
                tweenHandler={Drawer.tweenPresets.parallax}
            >
                <View>
                <Text onPress={this.openControlPanel}>
                    Drawer
                </Text>
                </View>
            </Drawer>
        );
    }
}

export default sidebar;