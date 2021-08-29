export function loadEvent(){
    const eventList = []
    const prevList = localStorage.getItem('event')
    if (prevList) {
        let array = JSON.parse(prevList)
        for (let i = 0; i < array.length; i++) {
            eventList.push(array[i])
        }
    }
    return eventList;
}