import React from 'react';
import { Text, View, Dimensions, FlatList } from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import PropTypes from 'prop-types';
//Import databse
import realm from '../databases/allSchemas';
import { queryAllAccountLists } from '../databases/allSchemas';
//Import Style
import { stylesPopupAccount } from '../styles/stylesPopupAccount';
//Import Component
import AccountItemComponet from '../components/AccountItemComponent';
const { width, height } = Dimensions.get('window')
const defaultHeight = height / 2;
const defaultWidth = width / 1.5
const AccountPopup = ({
    isOpen,
    onClose,
    accountData
}) => (
        <Dialog visible={isOpen} >
            <DialogContent style={{ width: defaultWidth, height: defaultHeight }}>
                <View style={[stylesPopupAccount.container]}>
                    <View style={[stylesPopupAccount.header,{width:defaultWidth}]}>
                        <Text style={stylesPopupAccount.title}>Select Account</Text>
                    </View>
                    <FlatList
                        data={accountData}
                        renderItem={({ item }) => {
                            return (
                                <AccountItemComponet name={item.name} />
                            )
                        }}
                        keyExtractor={(item) => item.id}
                    />
                    <Text onPress={onClose}>Close</Text>
                </View>

            </DialogContent>
        </Dialog>
    );
AccountPopup.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    accountData: PropTypes.any,
}
AccountPopup.defaultProps = {
    isOpen: false,
}
export default AccountPopup;
