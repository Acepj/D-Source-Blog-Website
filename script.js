

document.addEventListener("DOMContentLoaded", function () {
    // Blog posts data
    const notifications = [
      {
        id: 1,
        type: "comment",
        message:
          "Marcus Chen commented on your article 'Designing for Accessibility'",
        time: "2 minutes ago",
        read: false,
        icon: "ri-message-2-line",
      },
      {
        id: 2,
        type: "like",
        message: "Emma Thompson liked your post 'The Future of AI'",
        time: "1 hour ago",
        read: true,
        icon: "ri-heart-line",
      },
      {
        id: 3,
        type: "follow",
        message: "Sarah Johnson started following you",
        time: "3 hours ago",
        read: false,
        icon: "ri-user-follow-line",
      },
      {
        id: 4,
        type: "mention",
        message: "David Kim mentioned you in a comment",
        time: "5 hours ago",
        read: false,
        icon: "ri-at-line",
      },
    ];
    const blogPosts = [
      {
        id: 1,
        title: "The Future of AI in Web Development: Trends to Watch in 2025",
        excerpt:
          "Artificial intelligence is revolutionizing how we build websites. Discover the key AI trends that will shape web development in the coming year.",
        image:
          "/images/webdev.jpg",
        category: "technology",
        tags: ["ai", "web development", "future tech"],
        author: "May Shane",
        authorImage:
          "/author image/may.jpg",
        date: "May 2, 2025",
        readTime: "6 min read",
        popular: true,
      },
      {
        id: 2,
        title: "Designing for Accessibility: Best Practices for Inclusive UX",
        excerpt:
          "Creating accessible designs isn't just good ethics—it's good business. Learn how to make your digital products more inclusive for all users.",
        image:
          "/images/ux.jpg",
        category: "design",
        tags: ["accessibility", "ux design", "inclusive design"],
        author: "Marcus Chen",
        authorImage:
          "/author image/images.jpg",
        date: "April 28, 2025",
        readTime: "8 min read",
        popular: true,
      },
      {
        id: 3,
        title:
          "Sustainable Tech: How Companies Are Reducing Their Digital Carbon Footprint",
        excerpt:
          "The environmental impact of our digital lives is growing. Explore how leading tech companies are implementing eco-friendly practices.",
        image:
          "/images/web.jpeg",
        category: "technology",
        tags: ["sustainability", "green tech", "environment"],
        author: "Aes Oliva",
        authorImage:
          "/author image/aes.jpg",
        date: "April 25, 2025",
        readTime: "5 min read",
        popular: false,
      },
      {
        id: 4,
        title: "Remote Work Revolution: Building Effective Distributed Teams",
        excerpt:
          "Remote work is here to stay. Learn proven strategies for building, managing, and growing high-performing distributed teams.",
        image:
          "/images/buss.jpg",
        category: "business",
        tags: ["remote work", "team management", "productivity"],
        author: "Mark Leevort",
        authorImage:
          "/author image/images.jpg",
        date: "April 22, 2025",
        readTime: "7 min read",
        popular: true,
      },
      {
        id: 5,
        title:
          "The Psychology of Productivity: Science-Backed Ways to Get More Done",
        excerpt:
          "Struggling with productivity? Discover research-based techniques to overcome procrastination and achieve your goals more efficiently.",
        image:
          "/images/prod.png",
        category: "productivity",
        tags: ["psychology", "time management", "habits"],
        author: "Heart Guiterrez",
        authorImage:
          "/author image/aes.jpg",
        date: "April 18, 2025",
        readTime: "9 min read",
        popular: false,
      },
      {
        id: 6,
        title: "Digital Wellness: Balancing Tech Use for Better Mental Health",
        excerpt:
          "Technology should enhance our lives, not control them. Learn practical strategies for healthier digital habits and improved wellbeing.",
        image:
          "/images/heal.jpg",
        category: "health",
        tags: ["digital wellness", "mental health", "mindfulness"],
        author: "John Dawson",
        authorImage:
          "/author image/boyyy.jpg",
        date: "April 15, 2025",
        readTime: "6 min read",
        popular: true,
      },
      {
        id: 7,
        title:
          "Microservices vs. Monoliths: Choosing the Right Architecture for Your Project",
        excerpt:
          "The architecture debate continues. Explore the pros and cons of microservices and monolithic approaches to make the best choice for your needs.",
        image:
          "/images/ss.jpg",
        category: "technology",
        tags: ["software architecture", "microservices", "development"],
        author: "Alex Mercer",
        authorImage:
          "/author image/images.jpg",
        date: "April 12, 2025",
        readTime: "10 min read",
        popular: false,
      },
      {
        id: 8,
        title:
          "Color Psychology in UI Design: Choosing the Right Palette for Your Brand",
        excerpt:
          "Colors influence how users perceive your product. Learn how to select and implement color schemes that align with your brand values.",
        image:
          "/images/ui.jpg",
        category: "design",
        tags: ["ui design", "color theory", "branding"],
        author: "Anya Seyca",
        authorImage:
          "/author image/aes.jpg",
        date: "April 8, 2025",
        readTime: "7 min read",
        popular: true,
      },
      {
        id: 9,
        title: "Building a Personal Brand as a Developer: A Step-by-Step Guide",
        excerpt:
          "Standing out in a competitive industry requires more than technical skills. Discover how to build a personal brand that attracts opportunities.",
        image:
          "/images/bus.jpg",
        category: "business",
        tags: ["personal branding", "career development", "networking"],
        author: "Cyrus Macker",
        authorImage:
          "/author image/boyyy.jpg",
        date: "April 5, 2025",
        readTime: "8 min read",
        popular: false,
      },
      {
        id: 10,
        title: "The Pomodoro Technique: Mastering Time Management for Deep Work",
        excerpt:
          "Break your work into focused intervals for maximum productivity. Learn how to implement the Pomodoro Technique effectively.",
        image:
          "/images/pro.jpg",
        category: "productivity",
        tags: ["time management", "focus", "work techniques"],
        author: "Ash Samser",
        authorImage:
          "/author image/girl.jpg",
        date: "April 1, 2025",
        readTime: "5 min read",
        popular: true,
      },
      {
        id: 11,
        title: "Ergonomics for Developers: Preventing Pain and Improving Focus",
        excerpt:
          "Long hours at the computer can take a toll on your body. Discover ergonomic setups and habits that prevent pain and boost productivity.",
        image:
          "/images/health.jpg",
        category: "health",
        tags: ["ergonomics", "developer health", "workspace"],
        author: "Angelo Israel",
        authorImage:
          "/author image/images.jpg",
        date: "March 28, 2025",
        readTime: "6 min read",
        popular: false,
      },
      {
        id: 12,
        title:
          "Web3 and the Future of Digital Ownership: What Developers Need to Know",
        excerpt:
          "Blockchain technology is changing how we think about digital assets. Explore the key concepts and opportunities in the Web3 ecosystem.",
        image:
          "/images/dev.jpg",
        category: "technology",
        tags: ["web3", "blockchain", "digital ownership"],
        author: "Sophia Lee",
        authorImage:
          "/author image/girl.jpg",
        date: "March 25, 2025",
        readTime: "9 min read",
        popular: true,
      },
    ];
    // Render blog posts
    function renderNotifications() {
      const notificationList = document.querySelector(
        "#notificationPanel .max-h-96",
      );
      const unreadCount = notifications.filter((n) => !n.read).length;
      const notificationDot = document.querySelector(
        "#notificationButton .bg-red-500",
      );
      if (unreadCount > 0) {
        notificationDot.classList.remove("hidden");
      } else {
        notificationDot.classList.add("hidden");
      }
      notificationList.innerHTML = notifications
        .map(
          (notification) => `
  <div class="notification-item ${!notification.read ? "unread bg-blue-50" : ""} p-4 border-t border-gray-50 group" data-id="${notification.id}">
  <div class="flex items-start gap-3">
  <div class="w-8 h-8 rounded-full ${!notification.read ? "bg-blue-100" : "bg-gray-100"} flex items-center justify-center flex-shrink-0">
  <i class="${notification.icon} ${!notification.read ? "text-primary" : "text-gray-600"}"></i>
  </div>
  <div class="flex-1">
  <p class="text-sm text-gray-800">${notification.message}</p>
  <p class="text-xs text-gray-500 mt-1">${notification.time}</p>
  </div>
  <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
  ${
    !notification.read
      ? `
  <button class="mark-read-btn text-xs text-primary hover:text-primary/80" data-id="${notification.id}">
  <i class="ri-check-double-line"></i>
  </button>
  `
      : ""
  }
  <button class="delete-notification-btn text-xs text-red-500 hover:text-red-600" data-id="${notification.id}">
  <i class="ri-delete-bin-line"></i>
  </button>
  </div>
  </div>
  </div>
  `,
        )
        .join("");
      attachNotificationListeners();
    }
    function renderBlogPosts(posts, page = 1, itemsPerPage = 5) {
      const blogGrid = document.getElementById("blogGrid");
      blogGrid.innerHTML = "";
      if (posts.length === 0) {
        document.getElementById("noResults").classList.remove("hidden");
        blogGrid.classList.add("hidden");
      } else {
        document.getElementById("noResults").classList.add("hidden");
        blogGrid.classList.remove("hidden");
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedPosts = posts.slice(start, end);
        paginatedPosts.forEach((post) => {
          const postCard = document.createElement("article");
          postCard.className =
            "blog-card bg-white/90 backdrop-blur-sm rounded-button shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden fade-in";
          postCard.innerHTML = `
  <div class="relative overflow-hidden h-48">
  <img src="${post.image}" alt="${post.title}" class="card-image w-full h-full object-cover object-top">
  <div class="absolute top-3 left-3">
  <span class="inline-block px-2 py-1 text-xs font-medium bg-white/90 text-primary rounded-button">${post.category}</span>
  </div>
  ${
    post.popular
      ? `<div class="absolute top-3 right-3">
  <span class="inline-block px-2 py-1 text-xs font-medium bg-primary/90 text-white rounded-button">Popular</span>
  </div>`
      : ""
  }
  </div>
  <div class="p-5">
  <h2 class="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">${post.title}</h2>
  <p class="text-gray-600 text-sm mb-4 line-clamp-2">${post.excerpt}</p>
  <div class="flex items-center gap-3 mb-4">
  <img src="${post.authorImage}" alt="${post.author}" class="w-8 h-8 rounded-full object-cover">
  <div>
  <p class="text-sm font-medium text-gray-800">${post.author}</p>
  <div class="flex items-center text-xs text-gray-500">
  <span>${post.date}</span>
  <span class="mx-1">•</span>
  <span>${post.readTime}</span>
  </div>
  </div>
  </div>
  <div class="flex items-center justify-between">
  <a href="https://" data-readdy="true" class="text-primary text-sm font-medium hover:underline">Read more</a>
  <div class="flex items-center gap-2">
  <button class="bookmark-btn w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 !rounded-button whitespace-nowrap" data-post-id="${post.id}">
  <i class="ri-bookmark-line"></i>
  </button>
  <button class="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 !rounded-button whitespace-nowrap">
  <i class="ri-share-line"></i>
  </button>
  </div>
  </div>
  </div>
  `;
          blogGrid.appendChild(postCard);
        });
      }
      document.getElementById("resultsInfo").textContent =
        `Showing ${posts.length} article${posts.length !== 1 ? "s" : ""}`;
    }
    // Initial render with pagination
    const itemsPerPage = 5;
    const totalPages = Math.ceil(blogPosts.length / itemsPerPage);
    renderBlogPosts(blogPosts.slice(0, itemsPerPage), 1, itemsPerPage);
    document.getElementById("currentCount").textContent =
      `1-${Math.min(itemsPerPage, blogPosts.length)}`;
    document.getElementById("totalCount").textContent = `${blogPosts.length}`;
    // Update pagination buttons visibility
    const paginationButtons = document.querySelectorAll(".pagination-btn");
    paginationButtons.forEach((btn) => {
      const pageNum = parseInt(btn.textContent);
      if (pageNum > totalPages) {
        btn.style.display = "none";
      }
    });
    // Search functionality
    const searchInput = document.getElementById("searchInput");
    const clearSearchBtn = document.getElementById("clearSearch");
    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase().trim();
      if (searchTerm) {
        clearSearchBtn.classList.remove("hidden");
        // Show loading state briefly
        document.getElementById("blogGrid").classList.add("hidden");
        document.getElementById("loadingState").classList.remove("hidden");
        setTimeout(() => {
          const filteredPosts = blogPosts.filter((post) => {
            return (
              post.title.toLowerCase().includes(searchTerm) ||
              post.excerpt.toLowerCase().includes(searchTerm) ||
              post.category.toLowerCase().includes(searchTerm) ||
              post.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
            );
          });
          document.getElementById("loadingState").classList.add("hidden");
          renderBlogPosts(filteredPosts);
        }, 500);
      } else {
        clearSearchBtn.classList.add("hidden");
        renderBlogPosts(blogPosts);
      }
    });
    clearSearchBtn.addEventListener("click", function () {
      searchInput.value = "";
      clearSearchBtn.classList.add("hidden");
      renderBlogPosts(blogPosts);
    });
    // Category filter pills
    const filterPills = document.querySelectorAll(".filter-pill");
    filterPills.forEach((pill) => {
      pill.addEventListener("click", function () {
        // Remove active class from all pills
        filterPills.forEach((p) => p.classList.remove("active"));
        // Add active class to clicked pill
        this.classList.add("active");
        const filter = this.getAttribute("data-filter");
        // Show loading state briefly
        document.getElementById("blogGrid").classList.add("hidden");
        document.getElementById("loadingState").classList.remove("hidden");
        setTimeout(() => {
          if (filter === "all") {
            renderBlogPosts(blogPosts);
          } else {
            const filteredPosts = blogPosts.filter((post) => {
              return post.category === filter || post.tags.includes(filter);
            });
            renderBlogPosts(filteredPosts);
          }
          document.getElementById("loadingState").classList.add("hidden");
        }, 500);
      });
    });
    // Clear all filters button
    document
      .getElementById("clearFilters")
      .addEventListener("click", function () {
        searchInput.value = "";
        clearSearchBtn.classList.add("hidden");
        filterPills.forEach((pill) => {
          pill.classList.remove("active");
          if (pill.getAttribute("data-filter") === "all") {
            pill.classList.add("active");
          }
        });
        renderBlogPosts(blogPosts);
      });
    // Sort dropdown
    const sortBtn = document.querySelector("#sortText").parentElement;
    const sortDropdown = document.getElementById("sortDropdown");
    const sortOptions = document.querySelectorAll("#sortDropdown [data-sort]");
    sortBtn.addEventListener("click", function () {
      sortDropdown.classList.toggle("hidden");
    });
    sortOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const sortValue = this.getAttribute("data-sort");
        document.getElementById("sortText").textContent = this.textContent;
        sortDropdown.classList.add("hidden");
        // Show loading state briefly
        document.getElementById("blogGrid").classList.add("hidden");
        document.getElementById("loadingState").classList.remove("hidden");
        setTimeout(() => {
          let sortedPosts = [...blogPosts];
          if (sortValue === "latest") {
            // Already sorted by date (newest first) in our data
          } else if (sortValue === "oldest") {
            sortedPosts.reverse();
          } else if (sortValue === "popular") {
            sortedPosts.sort((a, b) => b.popular - a.popular);
          }
          renderBlogPosts(sortedPosts);
          document.getElementById("loadingState").classList.add("hidden");
        }, 500);
      });
    });
    // Pagination functionality
    function handlePagination(pageNumber) {
      const itemsPerPage = 5; // Fixed to 5 items per page
      const startIndex = (pageNumber - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      // Update pagination buttons
      const paginationButtons = document.querySelectorAll(".pagination-btn");
      paginationButtons.forEach((btn) => {
        if (parseInt(btn.textContent) === pageNumber) {
          btn.classList.remove(
            "border",
            "border-gray-200",
            "text-gray-700",
            "hover:bg-gray-50",
          );
          btn.classList.add("bg-primary", "text-white");
        } else {
          btn.classList.remove("bg-primary", "text-white");
          btn.classList.add(
            "border",
            "border-gray-200",
            "text-gray-700",
            "hover:bg-gray-50",
          );
        }
      });
      // Update current count display
      document.getElementById("currentCount").textContent =
        `${startIndex + 1}-${Math.min(endIndex, blogPosts.length)}`;
      // Show loading state
      document.getElementById("blogGrid").classList.add("hidden");
      document.getElementById("loadingState").classList.remove("hidden");
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Simulate loading and render new posts
      setTimeout(() => {
        const paginatedPosts = blogPosts.slice(startIndex, endIndex);
        renderBlogPosts(paginatedPosts, pageNumber, itemsPerPage);
        document.getElementById("loadingState").classList.add("hidden");
        document.getElementById("blogGrid").classList.remove("hidden");
      }, 500);
    }
    // Per page dropdown
    const perPageBtn = document.querySelector("#perPageText").parentElement;
    const perPageDropdown = document.getElementById("perPageDropdown");
    const perPageOptions = document.querySelectorAll(
      "#perPageDropdown [data-perpage]",
    );
    perPageBtn.addEventListener("click", function () {
      perPageDropdown.classList.toggle("hidden");
    });
    // Add pagination button click listeners
    document.addEventListener("DOMContentLoaded", function () {
      let bookmarkedPosts =
        JSON.parse(localStorage.getItem("bookmarkedPosts")) || [];
      let currentPage = 1;
      function attachNotificationListeners() {
        document.querySelectorAll(".mark-read-btn").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const notification = notifications.find((n) => n.id === id);
            if (notification) {
              notification.read = true;
              renderNotifications();
            }
          });
        });
        document.querySelectorAll(".delete-notification-btn").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const index = notifications.findIndex((n) => n.id === id);
            if (index !== -1) {
              notifications.splice(index, 1);
              renderNotifications();
            }
          });
        });
      }
      function updatePaginationButtons(currentPage) {
        const paginationButtons = document.querySelectorAll(".pagination-btn");
        paginationButtons.forEach((btn) => {
          const pageNum = parseInt(btn.textContent);
          btn.classList.remove(
            "bg-primary",
            "text-white",
            "border",
            "border-gray-200",
            "text-gray-700",
          );
          if (pageNum === currentPage) {
            btn.classList.add("bg-primary", "text-white");
          } else {
            btn.classList.add("border", "border-gray-200", "text-gray-700");
          }
        });
      }
      document.querySelectorAll(".pagination-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          const pageNum = parseInt(this.textContent);
          currentPage = pageNum;
          const itemsPerPage = 5;
          const startIndex = (pageNum - 1) * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
          document.getElementById("currentCount").textContent =
            `${startIndex + 1}-${Math.min(endIndex, blogPosts.length)}`;
          updatePaginationButtons(pageNum);
          renderBlogPosts(blogPosts, pageNum, itemsPerPage);
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
      function updateBookmarkIcon(button, isBookmarked) {
        const icon = button.querySelector("i");
        if (isBookmarked) {
          icon.classList.remove("ri-bookmark-line");
          icon.classList.add("ri-bookmark-fill");
          button.classList.add("text-primary");
        } else {
          icon.classList.remove("ri-bookmark-fill");
          icon.classList.add("ri-bookmark-line");
          button.classList.remove("text-primary");
        }
      }
      function renderBookmarkedPosts() {
        const bookmarkList = document.getElementById("bookmarkList");
        const emptyBookmarks = document.getElementById("emptyBookmarks");
        if (bookmarkedPosts.length === 0) {
          emptyBookmarks.classList.remove("hidden");
          return;
        }
        emptyBookmarks.classList.add("hidden");
        bookmarkList.innerHTML = bookmarkedPosts
          .map((postId) => {
            const post = blogPosts.find((p) => p.id === postId);
            if (!post) return "";
            return `
  <div class="p-4 border-b border-gray-50 hover:bg-gray-50">
  <div class="flex gap-3">
  <img src="${post.image}" alt="${post.title}" class="w-20 h-20 object-cover rounded-button">
  <div class="flex-1">
  <h4 class="text-sm font-medium text-gray-800 line-clamp-2 mb-1">${post.title}</h4>
  <p class="text-xs text-gray-500 mb-2">${post.date}</p>
  <button class="remove-bookmark text-xs text-red-500 hover:text-red-600" data-post-id="${post.id}">
  Remove from bookmarks
  </button>
  </div>
  </div>
  </div>
  `;
          })
          .join("");
        document.querySelectorAll(".remove-bookmark").forEach((btn) => {
          btn.addEventListener("click", function (e) {
            e.stopPropagation();
            const postId = parseInt(this.getAttribute("data-post-id"));
            bookmarkedPosts = bookmarkedPosts.filter((id) => id !== postId);
            localStorage.setItem(
              "bookmarkedPosts",
              JSON.stringify(bookmarkedPosts),
            );
            renderBookmarkedPosts();
            const cardButton = document.querySelector(
              `.bookmark-btn[data-post-id="${postId}"]`,
            );
            if (cardButton) updateBookmarkIcon(cardButton, false);
          });
        });
      }
      document.addEventListener("click", function (e) {
        const bookmarkContainer = document.getElementById("bookmarkContainer");
        const bookmarkPanel = document.getElementById("bookmarkPanel");
        if (!bookmarkContainer.contains(e.target)) {
          bookmarkPanel.classList.add("hidden");
        }
      });
      document
        .getElementById("bookmarkButton")
        .addEventListener("click", function (e) {
          e.stopPropagation();
          const bookmarkPanel = document.getElementById("bookmarkPanel");
          bookmarkPanel.classList.toggle("hidden");
          renderBookmarkedPosts();
        });
      document
        .getElementById("browseArticles")
        .addEventListener("click", function () {
          document.getElementById("bookmarkPanel").classList.add("hidden");
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      document.addEventListener("click", function (e) {
        if (e.target.closest(".bookmark-btn")) {
          const button = e.target.closest(".bookmark-btn");
          const postId = parseInt(button.getAttribute("data-post-id"));
          const isBookmarked = bookmarkedPosts.includes(postId);
          if (isBookmarked) {
            bookmarkedPosts = bookmarkedPosts.filter((id) => id !== postId);
          } else {
            bookmarkedPosts.push(postId);
          }
          localStorage.setItem(
            "bookmarkedPosts",
            JSON.stringify(bookmarkedPosts),
          );
          updateBookmarkIcon(button, !isBookmarked);
        }
      });
      const page2Button = document.getElementById("page2");
      if (page2Button) {
        page2Button.addEventListener("click", function () {
          handlePagination(2);
        });
      }
      const notificationButton = document.getElementById("notificationButton");
      const notificationPanel = document.getElementById("notificationPanel");
      const notificationContainer = document.getElementById(
        "notificationContainer",
      );
      const markAllReadButton = document.getElementById("markAllRead");
      function toggleNotificationPanel() {
        notificationPanel.classList.toggle("hidden");
      }
      function closeNotificationPanel() {
        notificationPanel.classList.add("hidden");
      }
      notificationButton.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleNotificationPanel();
      });
      markAllReadButton.addEventListener("click", function (e) {
        e.stopPropagation();
        const unreadNotifications = document.querySelectorAll(".unread");
        unreadNotifications.forEach((notification) => {
          notification.classList.remove("bg-blue-50");
          notification.classList.remove("unread");
        });
        notificationButton.querySelector(".bg-red-500").classList.add("hidden");
      });
      document.addEventListener("click", function (e) {
        if (!notificationContainer.contains(e.target)) {
          closeNotificationPanel();
        }
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          closeNotificationPanel();
        }
      });
    });
    perPageOptions.forEach((option) => {
      option.addEventListener("click", function () {
        document.getElementById("perPageText").textContent = this.textContent;
        perPageDropdown.classList.add("hidden");
        // In a real application, this would trigger pagination logic
        const perPage = parseInt(this.getAttribute("data-perpage"));
        document.getElementById("currentCount").textContent =
          `1-${Math.min(perPage, blogPosts.length)}`;
      });
    });
    // Close dropdowns when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !sortBtn.contains(event.target) &&
        !sortDropdown.contains(event.target)
      ) {
        sortDropdown.classList.add("hidden");
      }
      if (
        !perPageBtn.contains(event.target) &&
        !perPageDropdown.contains(event.target)
      ) {
        perPageDropdown.classList.add("hidden");
      }
    });
  });