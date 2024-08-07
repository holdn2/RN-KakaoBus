import { View, Text } from "react-native";
import { COLOR } from "./color";

export default ({
  hasInfo, //도착정보없음일 때 true
  remainedTimeText, //8분 0초 , 곧도착, 도착 정보 없음
  numOfRemainedStops, //1,2,14
  seatStatusText, //1석, 여유, 보통
  NEWCOLOR,
}) => {
  if (!hasInfo)
    return (
      <Text style={{ color: NEWCOLOR.GRAY_2_GRAY_3 }}>도착 정보 없음</Text>
    );
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={{ color: NEWCOLOR.BLACK_WHITE, marginRight: 10 }}>
        {remainedTimeText}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 0.4,
          borderBlockColor: NEWCOLOR.GRAY_1_GRAY_4,
          borderRadius: 3,
          padding: 2,
        }}
      >
        <Text
          style={{
            color: NEWCOLOR.GRAY_3_GRAY_2,
            marginRight: 3,
            fontSize: 12,
          }}
        >
          {numOfRemainedStops}번째전
        </Text>
        <Text style={{ color: COLOR.CORAL, fontSize: 12 }}>
          {seatStatusText}
        </Text>
      </View>
    </View>
  );
};
