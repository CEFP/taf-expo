import {Text, TouchableOpacity, View} from "react-native";
import {useNavigate} from "react-router-native";

function Home(props) {
    const navigate = useNavigate()
    return <View style={{width: '100vw'}}>
        <View style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <View style={{margin: 30}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>1234</Text>
                <Text style={{fontSize: 20}}>Total</Text>
            </View>
            <View style={{margin: 30}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>1234</Text>
                <Text style={{fontSize: 20}}>A Faire</Text>
            </View>
            <View style={{margin: 30}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>1234</Text>
                <Text style={{fontSize: 20}}>Fait</Text>
            </View>
        </View>
        <View>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <View>
                    <View style={{margin: 15}}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate("/add")
                            }}
                            style={{
                                backgroundColor: "silver",
                                padding: 10,
                                width: 128,
                            }}>
                            <Text style={{textAlign: "center"}}>Ajouter</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{margin: 15}}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate("/list")
                            }}
                            style={{
                                backgroundColor: "silver",
                                padding: 10,
                                width: 128,
                            }}>
                            <Text style={{textAlign: "center"}}>List</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </View>
}

export default Home
