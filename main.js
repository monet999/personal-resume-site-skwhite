const portfolioData = {
  shortVideos: [
    {
      title: "短视频作品 01",
      description: "请替换为你的作品简介",
      src: "./assets/videos/short-video/short-01.mp4"
    },
    {
      title: "短视频作品 02",
      description: "请替换为你的作品简介",
      src: "./assets/videos/short-video/short-02.mp4"
    }
  ],
  microFilms: [
    {
      title: "微电影作品 01",
      description: "请替换为你的作品简介",
      src: "./assets/videos/micro-film/micro-01.mp4"
    },
    {
      title: "微电影作品 02",
      description: "请替换为你的作品简介",
      src: "./assets/videos/micro-film/micro-02.mp4"
    }
  ],
  aigcAnimations: [
    {
      title: "AIGC 动画 01",
      description: "请替换为你的作品简介",
      src: "./assets/videos/aigc-animation/aigc-01.mp4"
    },
    {
      title: "AIGC 动画 02",
      description: "请替换为你的作品简介",
      src: "./assets/videos/aigc-animation/aigc-02.mp4"
    }
  ]
};

function createVideoCard(item) {
  const card = document.createElement("article");
  card.className = "video-card";

  const video = document.createElement("video");
  video.controls = true;
  video.preload = "metadata";
  video.src = item.src;

  const info = document.createElement("div");
  info.className = "video-info";
  info.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  `;

  card.appendChild(video);
  card.appendChild(info);

  return card;
}

function mountVideoList(containerId, list) {
  const container = document.getElementById(containerId);
  list.forEach((item) => container.appendChild(createVideoCard(item)));
}

mountVideoList("short-video-list", portfolioData.shortVideos);
mountVideoList("micro-film-list", portfolioData.microFilms);
mountVideoList("aigc-list", portfolioData.aigcAnimations);
