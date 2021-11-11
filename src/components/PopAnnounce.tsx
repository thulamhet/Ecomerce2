import { Button, Column, Divider, IconButton, Popover, Text } from "native-base";
import React, { useState } from "react";
import { Platform, TouchableOpacity } from "react-native";

interface IAnnouce {
    trigger: (_props: any, state: {
        open: boolean;
    }) => JSX.Element;
}

const Annouce = (props: IAnnouce) => {
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const {trigger} = props;
    return ( <Popover
        isOpen={isPickerOpen}
        onOpen={() => {
            setIsPickerOpen(true);
        }}
        onClose={() => {
            setIsPickerOpen(false);
        }}
        
        offset={Platform.OS === 'android' ? 20 : 0}
        // trigger={(triggerProps) => {
        //     return (
        //       <Button colorScheme="danger" alignSelf="center" {...triggerProps}>
        //         Delete Customer
        //       </Button>
        //     )
        //   }}
        placement={"top"}
        trigger={trigger}
          >
        <Popover.Content accessibilityLabel="Change Avatar"
        >
            <Popover.Arrow />
            <Popover.Header>Đã thêm vào giỏ</Popover.Header>
            {/* <Popover.Body paddingY={0}>
                <Column>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            minHeight: 32,
                            marginBottom: 8
                        }}
                        onPress={() => {
                            setIsPickerOpen(false);
                        }}
                    >
                      
                        <Text
                            style={{
                                marginLeft: 8
                            }}
                        >
                            Chọn từ album ảnh
                        </Text>
                    </TouchableOpacity>
                    <Divider height="0.5px"
                        width="100%"
                        // bgColor={olors.gray5}
                    />
                    <TouchableOpacity
                        style={{
                            marginTop: 8,
                            flexDirection: 'row',
                            alignItems: 'center',
                            minHeight: 32
                        }}
                        onPress={() => {
                            setIsPickerOpen(false);
                        }}
                    >
                        
                        <Text
                            style={{
                                marginLeft: 8
                            }}
                        >
                            Chụp ảnh mới
                        </Text>
                    </TouchableOpacity>
                </Column>
            </Popover.Body> */}
        </Popover.Content>
    </Popover>);
}

export default Annouce;