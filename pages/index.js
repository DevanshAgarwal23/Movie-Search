import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Form from "../components/forms";
import Card from "../components/cards";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import fetchMovies from "./api/fetchMovies";
import Spinner from "../components/spinner";

export default function Home() {
  const [name, setName] = useState();
  const [year, setYear] = useState();
  const [movies, setMoives] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [detailbool, setdetailbool] = useState(false);
  const [id, setId] = useState();

  function nameChanged(event) {
    setName(event.target.value);
  }

  function yearChanged(event) {
    setYear(event.target.value);
  }

  async function getMovies() {
    setIsLoading(true);
    const data = await fetchMovies(name, year);

    setMoives(data.Search);
    setIsLoading(false);
  }

  return (
    <div
      style={{
        paddingLeft: 80,
        paddingRight: 80,
      }}
    >
      <h1>Movie World</h1>
      <Form
        name={name}
        changeName={nameChanged}
        year={year}
        changeYear={yearChanged}
      />
      <Button
        onClick={() => {
          getMovies();
        }}
        variant="contained"
        color="primary"
      >
        Search
      </Button>
      {isLoading ? (
        <div>
          {" "}
          <br />
          <Spinner />
        </div>
      ) : (
        <div style={{ marginTop: 50 }}>
          <Grid container spacing={3}>
            {movies.map((movie) => {
              return (
                <Card
                  key={movie.imdbID}
                  clickFun={() => showDetail(movie.imdbID)}
                  name={movie.Title}
                  plot={movie.Year}
                  img={movie.Poster}
                  imdbID={movie.imdbID}
                />
              );
            })}
          </Grid>
        </div>
      )}
    </div>
  );
}
