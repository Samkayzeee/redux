import { useSelector } from "react-redux"

export default function Profile() {
    const user = useSelector((state) => state.user.value);
    console.log(user);
  return (
    <div> 
        {
            user.map((user) => {
                <div key={user.id}>
                    {user.name}, {user.password}
                </div>
            })
        }
    </div>
  )
}
