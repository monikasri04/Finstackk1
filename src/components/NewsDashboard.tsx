import {useEffect, useState} from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Button
} from "@mui/material";

type Article = {
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
};

function NewsDashboard(){;
    const [news, setNews] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=5d300700d3a248f4bf1ed2cc6c20d3fc"
        )
        .then((response) => response.json())
        .then((data) => {

            setNews(data.articles);
            setLoading(false);

        });


    }, []);

    if (loading) {
    return <h3>Loading news...</h3>;
    }

    return (

    <div>

      {
        news.map((article, index) => (

        <Card key={index}>

            <CardMedia

              component="img"

              height="200"

              image={
                article.urlToImage ||
                "https://via.placeholder.com/300"
              }

            />


            <CardContent>
                <h3>{article.title}</h3>
                <p>{article.description}</p>

                <Button variant="contained" href={article.url} target="_blank">
                    Read More
                </Button>
            </CardContent>


        </Card>

        ))

      }

    </div>

  );
}

export default NewsDashboard;