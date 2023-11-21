import {Text, TouchableOpacity, View} from "react-native";
import {useNavigate, useParams} from "react-router-native";
import {useEffect, useState} from "react";
import style from "./style";

function Task (props){
    const params = useParams()
    const navigate = useNavigate()
    const [task, setTask] = useState({});
    useEffect(()=>{
        props.db.transaction((tx) => {
            tx.executeSql(
                "SELECT * Taches WHERE id=?",
                [params.id],
                (_, success) => {
                    console.log(success)
                    setTask(success[0])
                },
                (error) => {
                },
            )
        })
    }, [params])
    return <View>
        <Text>Description:</Text>
        <View>
            <Text>
                {task.description}
            </Text>
        </View>
        <View>
            <Text>Date: {task.createdAt}</Text>
        </View>
        <View>
            <Text>Status: {task.status}</Text>
        </View>
        <View>
            <TouchableOpacity style={style.button}>
                <Text>Fait</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>navigate("/list")}
                style={style.button}>
                <Text>Liste</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default Task;
