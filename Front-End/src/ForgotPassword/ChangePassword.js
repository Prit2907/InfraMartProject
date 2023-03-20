
import axios from "axios";
import { useEffect,useState } from "react";

export function ChangePassword() {

    const [user, setUser] = useState([]);
    useEffect(() => {
        const getUser = async () => {
            const res = await axios('http://localhost:8081/');
            setUser(res.data);
        };

        getUser();
    }, []);


    return (
        <>
            <div>
                <table id="tbl">
                    <tr>
                        <th>UserId</th>
                        <th>firstName</th>
                        <th>Email</th>
                    </tr>
                    {user.map(use => {
                        return (
                            <>
                                <tr>
                                    <td>{use.userId}</td>
                                    <td>{use.firstName}</td>

                                    <td>{use.email}</td>
                                </tr>
                            </>
                        )

                    })}
                </table>
            </div>
        </>
    )
}