import { useParams } from "react-router-dom";

function CarreraModelRange () {
    const [gt3s, setGt3] = useState({})
    let { id } = useParams()
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(API + "/gt3/" + id)
            .then((response) => {
                setGt3(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [id]);

    return <article>
        <div>
            
        </div>
    </article>

}