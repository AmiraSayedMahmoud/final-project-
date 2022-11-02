import React, {useState,useEffect} from 'react'
import TableOfTrainee from '../TableOfTrainee/TableOfTrainee'
import { axiosInstance } from '../../Config/axios'

export default function AllTrainee() {
    // console.log(useLocation());
    const [trainee, setTrainee] = useState([])

    useEffect(() => {

        // rest of api link
        axiosInstance.get('/api/v1/users//').then((res) => {
            console.log("get all trainee from db");
            console.log(res);
            setTrainee(res.data)
        })
    }, [])
  return (
    <table className="table my-5" style={{width:"85%",margin:"auto"}}>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">subscription</th>
                    <th scope="col">Food History</th>
                    <th scope="col">Assign Foods</th>
                </tr>
            </thead>
            <tbody>
                {
                    trainee.map((item) => <TableOfTrainee data={item} />)
                }
            </tbody>
        </table>
  )
}
 