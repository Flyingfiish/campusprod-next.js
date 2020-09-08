import React from "react";

class Video extends React.Component {
  video = (
    <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
      <iframe
        className="youtube"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
        src={this.props.id}
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope;"
        allowFullScreen
        title={"iframe: " + this.props.id}
        id={this.props.id}
      ></iframe>
    </div>
  );

  render() {
    return this.video;
  }
}

export default Video;
