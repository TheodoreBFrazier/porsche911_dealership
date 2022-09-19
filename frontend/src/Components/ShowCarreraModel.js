import { useParams } from "react-router-dom";

function CarreraModelRange () {
    const [carreras, setCarreras] = useState({})
    let { id } = useParams()
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(API + "/carrera/" + id)
            .then((response) => {
                setCarreras(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [id]);

    return <article>
        <div>

        </div>
    </article>

}