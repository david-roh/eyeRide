import { View, Text } from "react-native";
// remove all profilePic fields, replace with points field
// add a points field to each user object
const listofUsers = [
    {
        name: "Nathan",
        points: 100,
    },
    {
        name: "John",
        points: 90,
    },
    {
        name: "Sally",
        points: 80,
    },
    {
        name: "Jane",
        points: 70,
    },
    {
        name: "Sue",
        points: 60,
    },
    {
        name: "Bob",
        points: 50,
    },
];

export default function Leaderboard() {
    return (
        <View>
            <Text>We made it to the leaderboard</Text>
        </View>
    );
}
