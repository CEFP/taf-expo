import {Text, TouchableOpacity, View} from "react-native";
import {useNavigate} from "react-router-native";
import style from "./style";

function Home(props) {
    const n = useNavigate()
    return <View>
        <View style={{display: "flex", flexDirection: "row"}}>
            <View style={{marginLeft: 15, marginRight: 15}}>
                <View><Text>000</Text></View>
                <View><Text>Total</Text></View>
            </View>
            <View style={{marginLeft: 15, marginRight: 15}}>
                <View style={{color: "red", fontWeight: "bold"}}><Text>000</Text></View>
                <View style={{color: "red", fontWeight: "bold"}}><Text>A faire</Text></View>
            </View>
            <View style={{marginLeft: 15, marginRight: 15}}>
                <View><Text>000</Text></View>
                <View><Text>Fait</Text></View>
            </View>
        </View>
        <View style={{marginTop: 20}}>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        n("/add")
                    }}
                    style={{backgroundColor: "silver", padding: 10, margin: 5}}>
                    <Text style={{textAlign: "center"}}>Ajouter</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        n("/list")
                    }}
                    style={style.button}>
                    <Text style={{textAlign: "center"}}>Liste</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

export default Home;
