// import React, { ReactComponentElement, useEffect } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useNavigation, useNavigationState } from '@react-navigation/native';
// import * as Heroicons from 'react-native-heroicons/solid';
// import Colors from '../themes/Colors';
// import Metrics from '../themes/Metrics';
// import ApplicationStyles from '../themes/ApplicationStyles';
// interface IHeaderCommonProps {
//     title?: string;
//     right?: ReactComponentElement<any>;
//     leftButtonPress?: () => void;
//     rightButtonPress?: () => void;
//     isTitleCenter?: boolean,
//     shadow?: boolean
// }

// const HeaderWithBackButton = ({
//     title,
//     right,
//     leftButtonPress,
//     rightButtonPress,
//     isTitleCenter,
//     shadow
// }: IHeaderCommonProps) => {
//     const navigation = useNavigation();
//     const names = useNavigationState(state => state.routeNames);
//     const type = useNavigationState(state => state.type);
//     const canBack = type == 'stack' && names.length > 1;

//     return (
//         <View style={{ ...styles.container, elevation: shadow ? 6 : 0, borderBottomWidth: shadow ? 1 : 0 }}>
//             <View style={{ flexDirection: 'row', maxWidth: '70%', alignItems: 'center' }}>
//                 {canBack && (
//                     <TouchableOpacity onPress={() => navigation.goBack()}>
//                         <Heroicons.ChevronLeftIcon
//                             size={Metrics.navigationIconSize}
//                             color={Colors.coolGray}
//                         />
//                     </TouchableOpacity>
//                 )}
//                 {title && !isTitleCenter && <Text style={{ ...ApplicationStyles.title, marginLeft: 20 }}>{title}</Text>}
//             </View>
//             {title && isTitleCenter && <Text style={{ ...ApplicationStyles.title, paddingLeft: canBack ? 24 : 0 }}>{title}</Text>}

//             <TouchableOpacity onPress={rightButtonPress}>
//                 {right}
//             </TouchableOpacity>

//         </View>
//     );
// };

// export default HeaderWithBackButton;

// const styles = StyleSheet.create({
//     container: {
//         ...ApplicationStyles.header
//     },
//     title: {
//         ...ApplicationStyles.title
//     },
// });
