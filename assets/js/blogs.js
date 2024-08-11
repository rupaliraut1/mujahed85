const blogsCategoriesList = [
  {
    id: 1,
    title: "Enterprise AI",
    img: "assets/img/blogs/categories/big-data-analytics-solution.svg",
    alt: "Icon representing Enterprise AI",
  },
  {
    id: 2,
    title: "Big Data Engineering",
    img: "assets/img/blogs/categories/technology-consulting-data-science.svg",
    alt: "Icon representing Big Data Engineering",
  },
  {
    id: 3,
    title: "DevOps",
    img: "assets/img/blogs/categories/devOps-services.svg",
    alt: "Icon representing DevOps",
  },
  {
    id: 4,
    title: "Data Science",
    img: "assets/img/blogs/categories/data-visualization.svg",
    alt: "Icon representing Data Science",
  },
  {
    id: 5,
    title: "Data Visualization",
    img: "assets/img/blogs/categories/enterprise-ai.svg",
    alt: "Icon representing Data Visualization",
  },
  {
    id: 6,
    title: "Generative AI",
    img: "assets/img/blogs/categories/serverless-security.svg",
    alt: "Icon representing Generative AI",
  },
  {
    id: 7,
    title: "Serverless Computing",
    img: "assets/img/blogs/categories/cyber-security.svg",
    alt: "Icon representing Serverless Computing",
  },
  {
    id: 8,
    title: "Cyber Security",
    img: "assets/img/blogs/categories/cloud-native.svg",
    alt: "Icon representing Cyber Security",
  },
  {
    id: 9,
    title: "Cloud Native Applications",
    img: "assets/img/blogs/categories/agile-thinking.svg",
    alt: "Icon representing Cloud Native Applications",
  },
  {
    id: 10,
    title: "Agile Delivery",
    img: "assets/img/blogs/categories/kubernetes-solution.svg",
    alt: "Icon representing Agile Delivery",
  },
  {
    id: 11,
    title: "Data Foundry",
    img: "assets/img/blogs/categories/xenonstack-culture.svg",
    alt: "Icon representing Data Foundry",
  },
  {
    id: 12,
    title: "Kubernetes Management",
    img: "assets/img/blogs/categories/blockchain-platform.svg",
    alt: "Icon representing Kubernetes Management",
  },
  {
    id: 13,
    title: "Artificial Intelligence Development Tools",
    img: "assets/img/blogs/categories/integration-with-multiple-cloud.svg",
    alt: "Icon representing Artificial Intelligence Development Tools",
  },
  {
    id: 14,
    title: "FinOps",
    img: "assets/img/blogs/categories/decision-intelligence.svg",
    alt: "Icon representing FinOps",
  },
  {
    id: 15,
    title: "XenonStack Culture",
    img: "assets/img/blogs/categories/setting.svg",
    alt: "Icon representing XenonStack Culture",
  },
  {
    id: 16,
    title: "Autonomous Agents",
    img: "assets/img/blogs/categories/setting.svg",
    alt: "Icon representing Autonomous Agents",
  },
  {
    id: 17,
    title: "Blockchain",
    img: "assets/img/blogs/categories/setting.svg",
    alt: "Icon representing Autonomous Agents",
  },
  {
    id: 18,
    title: "Decision Intelligence",
    img: "assets/img/blogs/categories/setting.svg",
    alt: "Icon representing Autonomous Agents",
  },
];


$(function() {
    displayBlogs()
});

function displayBlogs() {
    let data;
    data = blogsCategoriesList.map(
      (item) =>
        `
        <div data-id="${item.id}" class="col-12 col-sm-6 col-md-3 col-lg-3">
                    <div class="wrapper-card h-100">
                        <a href="#">
                            <div class="blog-card">
                                <img src="${item.img}"
                                    alt="${item.alt}" loading="lazy" width="400" height="400"
                                    class="img-fluid">
                
                                <h4 class="text-muted">${item.title}</h4>
                            </div>
                        </a>
                    </div>
                </div>
        `
    );
    $("#blogsCategoriesList").html(data);
}