

const express = require("express");
const router = express.Router();
const axios = require("axios");
const promise = require("promise");

router.get('/', (req, res) => {
    res.render("detail");
});

router.post("/", (req, res) => {
    const userid = req.body.userid;
    
    const options = {
        method: "GET",
        url: "https://instagram130.p.rapidapi.com/account-info",
        params: {
            username: userid,
        },
        headers: {
            "X-RapidAPI-Key": "93ca73460dmsh9dcbd826df40f50p133a86jsnf7056bec4766",
            "X-RapidAPI-Host": "instagram130.p.rapidapi.com",
        },
    };

    // Define the getDetails function without conflicts
    const getDetails = () => {
        return new promise((resolve, reject) => {
            // Use axios to make the request
            axios.request(options)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    };

    console.log(userid);
    getDetails().then(insta => {
        rel=insta.edge_related_profiles.edges
        media=insta.edge_owner_to_timeline_media.edges
        
        console.log(media);
        res.render("detail", { title: 'Insta Details', insta,rel,media });
    })
    .catch(error => {
        console.error('Error:', error);
        res.status(500).render("error", { error: 'An error occurred' });
    });
});

module.exports = router;
