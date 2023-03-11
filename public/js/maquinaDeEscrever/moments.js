export class moments{
      get moment() {
        const date = new Date()
        const hours = date.getHours()
        return{
            hours,
            date
        }
    }
}
