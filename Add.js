import {Text, TextInput, TouchableOpacity, View} from "react-native";
import style from "./style"
import {useState} from "react";
import {useNavigate} from "react-router-native";

function Add(props) {
    const [description, setDescription] = useState("");
    const navigate = useNavigate()
    const enregistrer = () => {
        console.log(description)
        props.db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO Taches (description, status, createdAt, doneAt) VALUES (?,?,?,?)",
                [description, "A FAIRE", Date.now(), null],
                (_, success) => {
                    if (success.insertId) {
                        navigate("/task/" + success.insertId)
                    } else {
                        alert("erreur de traitement")
                    }
                },
                (error) => {
                },
            )
        })
    }
    return <View>
        <View>
            <TextInput
                multiline
                style={{
                    backgroundColor: "silver",
                    borderColor: "grey",
                    height: 64,
                    width: 180
                }}
                onChange={(e) => setDescription(e.target.value)}
            />
        </View>
        <View>
            <View>
                <TouchableOpacity
                    style={style.button}
                    onPress={enregistrer}>
                    <Text style={style.buttonText}>Enregistrer</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Annuler</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

export default Add;
