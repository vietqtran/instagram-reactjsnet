import AsyncStorage from "@react-native-async-storage/async-storage"

export const addUser = async (id: string) => {
    try {
        const ids = await AsyncStorage.getItem('USERS') + id + ';'
        console.log(ids)
        await AsyncStorage.setItem('USERS', ids)
    } catch (error) {
        console.log('=====> AsyncStorage ERROR: ' + error)
    }
}