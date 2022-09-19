import { useParams } from "react-router-dom";

function CarreraModelRange () {
    const [carreras, setTurbos] = useState({})
    let { id } = useParams()
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(API + "/turbo/" + id)
            .then((response) => {
                setTurbos(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [id]);

    return <article>
        <div>
            
        </div>
    </article>

}