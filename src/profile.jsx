import { useSelector } from "react-redux"

export default function Profile() {
    const user = useSelector((state) => state.user.value);
    console.log(user);
  return (
    <div> 
        {
            user.map((user) => {
                return(
                    <div key={user.id}>
                        {user.name}, {user.password} {user.id}
                    </div>
                )
            })
        }
    </div>
  )
}
