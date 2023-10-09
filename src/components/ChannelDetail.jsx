import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "../components/Videos";
import ChannelCard from "./ChannelCard";
import fetchFromApi from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channel, setchannel] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(channel);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
      setchannel(data.items[0]);
    });
    fetchFromApi(`search?part=snippet&channelId=${id}&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channel} marginTop="-93px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "20px" } }} />
        <Videos videos={videos} />
      </Box>
      <Videos videos={videos} />
    </Box>
  );
};

export default ChannelDetail;
