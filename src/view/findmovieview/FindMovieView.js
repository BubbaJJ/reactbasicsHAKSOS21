import { useState, useEffect } from "react";
import TmdbAPIService from "../../shared/api/service/TmdbAPIService";
import { Spinner, Card, Button, Modal } from "react-bootstrap";

export const FindMovieView = () => {
  const [serverData, setServerData] = useState([]);
  const imageURL = "https://image.tmdb.org/t/p/w500/";
  const [input, setInput] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchData = async () => {
    // const response = await TmdbAPIService.getFighClub();
    //   setServerData(response.data);

    const { data } = await TmdbAPIService.getFighClub(); // Hämtar ut data från response.
    setServerData(data);
    setIsLoaded(true);
  };

  const findMovies = async () => {
    setIsLoaded(false);
    try {
      const { data } = await TmdbAPIService.findMoviesByTitle(input);
      setServerData(data.results);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const displayData = () => {
    return isLoaded ? (
      <div>
        {serverData.map((movie) => (
          <>
            <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={`${imageURL}${movie?.poster_path}`}
                alt="Movie poster"
              />
              <Card.Body>
                <Card.Title>{movie?.title}</Card.Title>
                <Card.Text>{movie?.runtime}</Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  See more
                </Button>
              </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>{movie?.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{movie?.overview}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        ))}
        {/* <img src={`${imageURL}${serverData?.poster_path}`} alt="Movie poster" />
        <h1>{serverData?.title}</h1>
        <h2>{serverData?.original_language}</h2>
    <h2>{serverData?.runtime}</h2> */}
      </div>
    ) : (
      <div>
        <h2>
          <Spinner animation="border" />
        </h2>
      </div>
    );
  };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <main>
      <section>
        <h1>Find a movie</h1>
        {/* Inputfält & button */}
        <input
          placeholder="Enter movie title"
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={() => findMovies()}>Find Movie</button>
        {displayData()}
      </section>
    </main>
  );
};
