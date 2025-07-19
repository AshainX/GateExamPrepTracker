(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 9704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2838)), "C:\\Users\\ashut\\Documents\\GitHub\\GateExamPrepTracker\\app\\page.tsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1921)), "C:\\Users\\ashut\\Documents\\GitHub\\GateExamPrepTracker\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["C:\\Users\\ashut\\Documents\\GitHub\\GateExamPrepTracker\\app\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 1749:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4802))

/***/ }),

/***/ 7201:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 8994:
/***/ (() => {



/***/ }),

/***/ 4802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modularize_import_loader_name_CheckSquare_from_default_as_default_join_esm_icons_check_square_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5019);
/* harmony import */ var modularize_import_loader_name_Square_from_default_as_default_join_esm_icons_square_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1295);
/* harmony import */ var modularize_import_loader_name_BookOpen_from_default_as_default_join_esm_icons_book_open_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6513);
/* harmony import */ var modularize_import_loader_name_Target_from_default_as_default_join_esm_icons_target_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5105);
/* harmony import */ var modularize_import_loader_name_Calendar_from_default_as_default_join_esm_icons_calendar_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8205);
/* harmony import */ var modularize_import_loader_name_TrendingUp_from_default_as_default_join_esm_icons_trending_up_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9917);
/* harmony import */ var modularize_import_loader_name_Edit3_from_default_as_default_join_esm_icons_pen_line_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8306);
/* harmony import */ var modularize_import_loader_name_Save_from_default_as_default_join_esm_icons_save_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4483);
/* harmony import */ var modularize_import_loader_name_X_from_default_as_default_join_esm_icons_x_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5833);
/* __next_internal_client_entry_do_not_use__ default auto */ 










const GateTracker = ()=>{
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("overview");
    const [selectedSubject, setSelectedSubject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [completedConcepts, setCompletedConcepts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Set());
    const [notes, setNotes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [editingNote, setEditingNote] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [tempNote, setTempNote] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Helper function to check if object has weightage property
    const hasWeightage = (obj)=>{
        return typeof obj === "object" && obj !== null && "weightage" in obj;
    };
    // Load data from memory on component mount
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // In a real app, this would load from localStorage, but we'll use component state
        const savedCompleted = new Set();
        const savedNotes = {};
        setCompletedConcepts(savedCompleted);
        setNotes(savedNotes);
    }, []);
    const subjects = {
        "Programming & Data Structures": {
            weightage: 11.5,
            priority: "Very High",
            concepts: [
                "Arrays and Dynamic Arrays",
                "Array Rotations and Manipulations",
                "Two Pointers and Sliding Window",
                "Linked Lists (Singly, Doubly, Circular)",
                "Linked List Algorithms (Reverse, Merge, Cycle Detection)",
                "Stacks and Applications",
                "Stack Applications (Expression Evaluation, Parentheses)",
                "Queues and Circular Queues",
                "Deque and Priority Queues",
                "Binary Trees and Traversals",
                "Binary Tree Properties and Construction",
                "Binary Search Trees (BST)",
                "BST Operations and Validation",
                "AVL Trees and Rotations",
                "Red-Black Trees",
                "Heaps and Priority Queues",
                "Heap Sort and Heap Operations",
                "Hashing and Hash Tables",
                "Hash Functions and Collision Resolution",
                "Graph Representation (Adjacency List/Matrix)",
                "Graph Traversals (BFS, DFS)",
                "Shortest Path Algorithms (Dijkstra, Bellman-Ford)",
                "All Pairs Shortest Path (Floyd-Warshall)",
                "Minimum Spanning Tree (Kruskal, Prim)",
                "Topological Sorting",
                "Strongly Connected Components",
                "Articulation Points and Bridges",
                "Maximum Flow Algorithms",
                "Tries and String Processing",
                "Segment Trees and Fenwick Trees"
            ]
        },
        "Computer Organization & Architecture": {
            weightage: 11.25,
            priority: "Very High",
            concepts: [
                "Number Systems and Base Conversions",
                "Binary Arithmetic and Overflow",
                "Fixed Point and Floating Point Representation",
                "Computer Arithmetic (Addition, Subtraction, Multiplication)",
                "Booth's Multiplication Algorithm",
                "Division Algorithms",
                "Instruction Set Architecture (RISC vs CISC)",
                "Instruction Formats and Types",
                "Addressing Modes",
                "CPU Design and Control Unit",
                "Hardwired vs Microprogrammed Control",
                "Pipelining Fundamentals",
                "Pipeline Performance and Speedup",
                "Pipeline Hazards (Structural, Data, Control)",
                "Hazard Detection and Resolution",
                "Branch Prediction",
                "Cache Memory Organization",
                "Cache Mapping Techniques (Direct, Associative, Set-Associative)",
                "Cache Replacement Policies",
                "Cache Coherence and Write Policies",
                "Virtual Memory and Address Translation",
                "Page Replacement Algorithms",
                "Memory Hierarchy and Performance",
                "I/O Organization and Interfaces",
                "Interrupt Handling and DMA",
                "Bus Architecture and Protocols",
                "Multiprocessor Systems",
                "Performance Metrics (CPI, MIPS, Speedup)",
                "Memory Interleaving",
                "GPU Architecture Basics"
            ]
        },
        "General Aptitude": {
            weightage: 14.75,
            priority: "Very High",
            concepts: [
                "Percentages and Applications",
                "Profit and Loss Problems",
                "Simple and Compound Interest",
                "Ratio and Proportion",
                "Time and Work Problems",
                "Pipes and Cisterns",
                "Time, Speed and Distance",
                "Relative Speed and Motion",
                "Boats and Streams",
                "Trains and Platform Problems",
                "Probability Fundamentals",
                "Conditional Probability",
                "Permutations and Combinations",
                "Arrangements and Selections",
                "Number Series and Patterns",
                "Data Interpretation (Tables, Charts, Graphs)",
                "Reading Comprehension",
                "Paragraph Summary",
                "Verbal Analogies",
                "Synonyms and Antonyms",
                "Grammar and Usage",
                "Sentence Completion",
                "Critical Reasoning",
                "Logical Deduction",
                "Blood Relations",
                "Direction Sense",
                "Coding and Decoding",
                "Clocks and Calendars",
                "Ages Problems",
                "Mixture and Alligation"
            ]
        },
        "Operating Systems": {
            weightage: 8.5,
            priority: "High",
            concepts: [
                "Process Management and Process States",
                "Process Control Block (PCB)",
                "Context Switching",
                "CPU Scheduling Algorithms (FCFS, SJF, Priority, RR)",
                "Multilevel Queue Scheduling",
                "Process Synchronization Problems",
                "Critical Section and Mutual Exclusion",
                "Semaphores and Mutex",
                "Classical Synchronization Problems",
                "Deadlocks and Deadlock Prevention",
                "Deadlock Avoidance (Banker's Algorithm)",
                "Deadlock Detection and Recovery",
                "Memory Management Techniques",
                "Contiguous Memory Allocation",
                "Paging and Segmentation",
                "Virtual Memory Management",
                "Demand Paging and Page Faults",
                "Page Replacement Algorithms",
                "Thrashing and Working Set Model",
                "File Systems and Directory Structure",
                "File Allocation Methods",
                "Free Space Management",
                "I/O Management and Scheduling",
                "Disk Scheduling Algorithms",
                "System Calls and System Programs",
                "Threads and Multithreading",
                "Thread Synchronization",
                "Inter-Process Communication (IPC)",
                "Security and Protection",
                "Distributed Operating Systems"
            ]
        },
        "Computer Networks": {
            weightage: 9.0,
            priority: "High",
            concepts: [
                "OSI Reference Model",
                "TCP/IP Protocol Suite",
                "Network Topologies",
                "Physical Layer and Transmission Media",
                "Digital and Analog Transmission",
                "Multiplexing Techniques",
                "Data Link Layer Functions",
                "Framing and Error Detection",
                "Error Correction Codes",
                "Flow Control Protocols",
                "Sliding Window Protocols",
                "HDLC and PPP",
                "MAC Protocols (CSMA/CD, CSMA/CA)",
                "Ethernet and IEEE 802.11",
                "Network Layer and IP Addressing",
                "IPv4 and IPv6",
                "Subnetting and CIDR",
                "Routing Algorithms (Distance Vector, Link State)",
                "RIP, OSPF, and BGP",
                "ARP and RARP",
                "ICMP and Network Management",
                "Transport Layer Services",
                "TCP and UDP Protocols",
                "TCP Connection Management",
                "Flow Control and Congestion Control",
                "Application Layer Protocols",
                "HTTP, HTTPS, FTP, SMTP",
                "DNS and DHCP",
                "Network Security Fundamentals",
                "Cryptography Basics",
                "Firewalls and VPNs",
                "Quality of Service (QoS)",
                "Mobile and Wireless Networks"
            ]
        },
        "Discrete Mathematics": {
            weightage: 9.0,
            priority: "High",
            concepts: [
                "Propositional Logic and Truth Tables",
                "Logical Connectives and Equivalences",
                "Predicate Logic and Quantifiers",
                "Mathematical Induction",
                "Set Theory Operations",
                "Relations and Properties",
                "Equivalence and Partial Order Relations",
                "Functions and Types (Injective, Surjective, Bijective)",
                "Composition and Inverse Functions",
                "Graph Theory Fundamentals",
                "Types of Graphs and Representations",
                "Graph Connectivity and Components",
                "Trees and Properties",
                "Spanning Trees and Algorithms",
                "Planar Graphs and Euler's Formula",
                "Graph Coloring",
                "Hamiltonian and Eulerian Paths",
                "Combinatorics Principles",
                "Counting Techniques",
                "Pigeonhole Principle Applications",
                "Inclusion-Exclusion Principle",
                "Generating Functions",
                "Recurrence Relations and Solutions",
                "Group Theory Basics",
                "Algebraic Structures",
                "Boolean Algebra and Laws",
                "Normal Forms (DNF, CNF)",
                "Lattices and Partial Orders",
                "Number Theory Basics",
                "Modular Arithmetic and Applications"
            ]
        },
        "Theory of Computation": {
            weightage: 8.0,
            priority: "High",
            concepts: [
                "Finite Automata (DFA) Construction",
                "Non-deterministic Finite Automata (NFA)",
                "NFA to DFA Conversion",
                "Regular Expressions and Languages",
                "Conversion between RE and FA",
                "Regular Language Properties",
                "Pumping Lemma for Regular Languages",
                "Context-Free Grammars (CFG)",
                "Derivations and Parse Trees",
                "Ambiguity in CFGs",
                "Normal Forms (CNF, GNF)",
                "Pushdown Automata (PDA)",
                "CFG to PDA Conversion",
                "Context-Free Language Properties",
                "Pumping Lemma for CFLs",
                "Turing Machines and Variants",
                "TM as Language Acceptors",
                "Church-Turing Thesis",
                "Decidable and Undecidable Problems",
                "Halting Problem",
                "Rice's Theorem",
                "Complexity Classes (P, NP, NP-Complete)",
                "Cook's Theorem",
                "NP-Complete Problems",
                "Reduction Techniques",
                "Space Complexity Classes",
                "Hierarchy Theorems",
                "Recursively Enumerable Languages",
                "Post Correspondence Problem",
                "Linear Bounded Automata"
            ]
        },
        "Database Management Systems": {
            weightage: 6.75,
            priority: "Medium",
            concepts: [
                "Database System Architecture",
                "ER Model and ER Diagrams",
                "Enhanced ER Model",
                "ER to Relational Mapping",
                "Relational Model Concepts",
                "Relational Algebra Operations",
                "Tuple and Domain Relational Calculus",
                "SQL Fundamentals and DDL",
                "SQL Queries and DML",
                "Complex SQL Queries and Joins",
                "Nested Queries and Correlated Subqueries",
                "Views and Stored Procedures",
                "Functional Dependencies",
                "Normalization (1NF, 2NF, 3NF)",
                "BCNF and Higher Normal Forms",
                "Multi-valued Dependencies and 4NF",
                "Denormalization Strategies",
                "Transaction Management",
                "ACID Properties",
                "Concurrency Control Techniques",
                "Lock-Based Protocols",
                "Timestamp-Based Protocols",
                "Deadlock Handling in DBMS",
                "Recovery Techniques",
                "Log-Based Recovery",
                "Indexing and B-trees",
                "B+ Trees and Hashing",
                "Query Processing and Optimization",
                "Cost-Based Optimization",
                "Distributed Databases",
                "NoSQL Databases",
                "Data Warehousing Concepts"
            ]
        },
        "Algorithms": {
            weightage: 6.25,
            priority: "Medium",
            concepts: [
                "Algorithm Analysis Fundamentals",
                "Time and Space Complexity",
                "Asymptotic Notations (Big O, Theta, Omega)",
                "Best, Worst, and Average Case Analysis",
                "Divide and Conquer Paradigm",
                "Master Theorem Applications",
                "Merge Sort and Quick Sort",
                "Binary Search and Variations",
                "Sorting Algorithms Comparison",
                "Counting Sort and Radix Sort",
                "Searching in Sorted Arrays",
                "Dynamic Programming Concepts",
                "Optimal Substructure and Overlapping Subproblems",
                "Classical DP Problems (LCS, LIS, Knapsack)",
                "Matrix Chain Multiplication",
                "Greedy Algorithm Design",
                "Activity Selection and Fractional Knapsack",
                "Huffman Coding",
                "Minimum Spanning Tree Algorithms",
                "Single Source Shortest Path",
                "All Pairs Shortest Path",
                "Backtracking Algorithms",
                "N-Queens and Graph Coloring",
                "Branch and Bound Technique",
                "String Matching Algorithms",
                "KMP and Rabin-Karp Algorithms",
                "Network Flow Algorithms",
                "Maximum Bipartite Matching",
                "Approximation Algorithms",
                "Randomized Algorithms",
                "Amortized Analysis",
                "Advanced Data Structure Applications"
            ]
        },
        "Engineering Mathematics": {
            weightage: 6.0,
            priority: "Medium",
            concepts: [
                "Linear Algebra Fundamentals",
                "Matrices and Matrix Operations",
                "Determinants and Properties",
                "System of Linear Equations",
                "Eigenvalues and Eigenvectors",
                "Diagonalization of Matrices",
                "Vector Spaces and Linear Independence",
                "Inner Product Spaces",
                "Calculus - Limits and Continuity",
                "Differentiation Rules and Applications",
                "Partial Derivatives and Chain Rule",
                "Maxima and Minima Problems",
                "Integration Techniques",
                "Definite Integrals and Applications",
                "Multiple Integrals",
                "Differential Equations (First Order)",
                "Linear Differential Equations",
                "Applications of Differential Equations",
                "Probability Theory Fundamentals",
                "Conditional Probability and Bayes' Theorem",
                "Random Variables and Distributions",
                "Discrete Probability Distributions",
                "Continuous Probability Distributions",
                "Joint Probability Distributions",
                "Expectation and Variance",
                "Central Limit Theorem",
                "Statistical Inference",
                "Hypothesis Testing",
                "Correlation and Regression",
                "Fourier Series and Transforms",
                "Laplace Transforms",
                "Complex Numbers and Functions"
            ]
        },
        "Digital Logic": {
            weightage: 5.0,
            priority: "Medium",
            concepts: [
                "Number Systems and Conversions",
                "Binary Arithmetic Operations",
                "Boolean Algebra Fundamentals",
                "Boolean Laws and Theorems",
                "Logic Gates and Truth Tables",
                "Universal Gates (NAND, NOR)",
                "Combinational Circuit Analysis",
                "Combinational Circuit Design",
                "Karnaugh Maps (K-Maps)",
                "K-Map Simplification Techniques",
                "Quine-McCluskey Method",
                "Multiplexers and Applications",
                "Demultiplexers and Decoders",
                "Encoders and Priority Encoders",
                "Adders (Half, Full, Ripple Carry)",
                "Subtractors and Comparators",
                "Sequential Circuit Fundamentals",
                "Latches (SR, D, JK)",
                "Flip-Flops and Timing",
                "Edge-Triggered Flip-Flops",
                "Registers and Shift Registers",
                "Counters (Asynchronous, Synchronous)",
                "Modulo-N Counters",
                "Ring and Johnson Counters",
                "Memory Elements and Organization",
                "RAM and ROM Types",
                "Programmable Logic Devices",
                "State Machines and State Diagrams",
                "Finite State Machine Design",
                "Hazards and Race Conditions",
                "Timing Analysis in Digital Circuits",
                "CMOS Logic and Power Dissipation"
            ]
        },
        "Compiler Design": {
            weightage: 4.75,
            priority: "Low",
            concepts: [
                "Compiler Architecture and Phases",
                "Lexical Analysis Fundamentals",
                "Regular Expressions in Lexical Analysis",
                "Finite Automata for Lexical Analysis",
                "Lex Tool and Lexical Analyzer Generation",
                "Token Recognition and Symbol Table",
                "Syntax Analysis Overview",
                "Context-Free Grammars in Parsing",
                "Top-Down Parsing Techniques",
                "Recursive Descent Parsing",
                "LL(1) Parsing",
                "First and Follow Sets",
                "Bottom-Up Parsing",
                "LR(0) and SLR(1) Parsing",
                "LALR(1) and LR(1) Parsing",
                "Yacc Tool and Parser Generation",
                "Error Recovery in Parsing",
                "Semantic Analysis",
                "Syntax-Directed Translation",
                "Attribute Grammars",
                "Type Checking and Type Systems",
                "Symbol Table Management",
                "Intermediate Code Generation",
                "Three-Address Code",
                "Code Optimization Techniques",
                "Local and Global Optimization",
                "Data Flow Analysis",
                "Code Generation",
                "Instruction Selection",
                "Register Allocation",
                "Runtime Environment",
                "Memory Organization and Management"
            ]
        }
    };
    const toggleConcept = (subjectName, conceptIndex)=>{
        const conceptId = `${subjectName}-${conceptIndex}`;
        const newCompleted = new Set(completedConcepts);
        if (newCompleted.has(conceptId)) {
            newCompleted.delete(conceptId);
        } else {
            newCompleted.add(conceptId);
        }
        setCompletedConcepts(newCompleted);
    };
    const saveNote = (subjectName, conceptIndex)=>{
        const conceptId = `${subjectName}-${conceptIndex}`;
        const newNotes = {
            ...notes
        };
        newNotes[conceptId] = tempNote;
        setNotes(newNotes);
        setEditingNote(null);
        setTempNote("");
    };
    const startEditingNote = (subjectName, conceptIndex)=>{
        const conceptId = `${subjectName}-${conceptIndex}`;
        setEditingNote(conceptId);
        setTempNote(notes[conceptId] || "");
    };
    const cancelEditingNote = ()=>{
        setEditingNote(null);
        setTempNote("");
    };
    const calculateProgress = ()=>{
        let totalConcepts = 0;
        let completedCount = 0;
        let subjectProgress = {};
        Object.entries(subjects).forEach(([subjectName, subject])=>{
            const subjectTotal = subject.concepts.length;
            let subjectCompleted = 0;
            subject.concepts.forEach((_, index)=>{
                const conceptId = `${subjectName}-${index}`;
                if (completedConcepts.has(conceptId)) {
                    subjectCompleted++;
                    completedCount++;
                }
            });
            totalConcepts += subjectTotal;
            subjectProgress[subjectName] = {
                completed: subjectCompleted,
                total: subjectTotal,
                percentage: subjectTotal > 0 ? Math.round(subjectCompleted / subjectTotal * 100) : 0,
                weightage: subject.weightage
            };
        });
        return {
            overall: totalConcepts > 0 ? Math.round(completedCount / totalConcepts * 100) : 0,
            subjects: subjectProgress,
            totalCompleted: completedCount,
            totalConcepts: totalConcepts
        };
    };
    const progress = calculateProgress();
    const getPriorityColor = (priority)=>{
        switch(priority){
            case "Very High":
                return "text-red-600 bg-red-50";
            case "High":
                return "text-orange-600 bg-orange-50";
            case "Medium":
                return "text-yellow-600 bg-yellow-50";
            case "Low":
                return "text-green-600 bg-green-50";
            default:
                return "text-gray-600 bg-gray-50";
        }
    };
    const OverviewTab = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-2xl font-bold mb-4",
                            children: "GATE CSE 2026 Progress"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-white bg-opacity-20 p-4 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Target_from_default_as_default_join_esm_icons_target_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                    className: "w-5 h-5 mr-2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "font-medium",
                                                    children: "Overall Progress"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-3xl font-bold",
                                            children: [
                                                progress.overall,
                                                "%"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-sm opacity-90",
                                            children: [
                                                progress.totalCompleted,
                                                "/",
                                                progress.totalConcepts,
                                                " concepts"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-white bg-opacity-20 p-4 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Calendar_from_default_as_default_join_esm_icons_calendar_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    className: "w-5 h-5 mr-2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "font-medium",
                                                    children: "Target Date"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-xl font-bold",
                                            children: "Feb 2026"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-sm opacity-90",
                                            children: "197 days remaining"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-white bg-opacity-20 p-4 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center mb-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_TrendingUp_from_default_as_default_join_esm_icons_trending_up_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    className: "w-5 h-5 mr-2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "font-medium",
                                                    children: "Target Score"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-xl font-bold",
                                            children: "90+ marks"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-sm opacity-90",
                                            children: "AIR 1-500"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid gap-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-xl font-semibold text-gray-800",
                            children: "Subject-wise Progress"
                        }),
                        Object.entries(progress.subjects).filter((entry)=>hasWeightage(entry[1])).sort((a, b)=>b[1].weightage - a[1].weightage).map(([subjectName, subjectData])=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-white p-4 rounded-lg shadow-md border",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between items-center mb-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        className: "font-semibold text-gray-800",
                                                        children: subjectName
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: `px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(subjects[subjectName].priority)}`,
                                                                children: [
                                                                    subjects[subjectName].priority,
                                                                    " Priority"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "text-sm text-gray-600",
                                                                children: [
                                                                    subjectData.weightage,
                                                                    " marks"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "text-lg font-bold text-blue-600",
                                                        children: [
                                                            subjectData.percentage,
                                                            "%"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "text-sm text-gray-500",
                                                        children: [
                                                            subjectData.completed,
                                                            "/",
                                                            subjectData.total
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full bg-gray-200 rounded-full h-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-blue-500 h-2 rounded-full transition-all duration-300",
                                            style: {
                                                width: `${subjectData.percentage}%`
                                            }
                                        })
                                    })
                                ]
                            }, subjectName))
                    ]
                })
            ]
        });
    const ChaptersTab = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-xl font-semibold text-gray-800",
                    children: "All Subjects"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid gap-4",
                    children: Object.entries(subjects).sort((a, b)=>b[1].weightage - a[1].weightage).map(([subjectName, subject])=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-white rounded-lg shadow-md border overflow-hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors",
                                    onClick: ()=>setSelectedSubject(selectedSubject === subjectName ? null : subjectName),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        className: "font-semibold text-gray-800",
                                                        children: subjectName
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center gap-2 mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: `px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(subject.priority)}`,
                                                                children: [
                                                                    subject.priority,
                                                                    " Priority"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "text-sm text-gray-600",
                                                                children: [
                                                                    subject.weightage,
                                                                    " marks"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "text-lg font-bold text-blue-600",
                                                        children: [
                                                            progress.subjects[subjectName].percentage,
                                                            "%"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "text-sm text-gray-500",
                                                        children: [
                                                            progress.subjects[subjectName].completed,
                                                            "/",
                                                            progress.subjects[subjectName].total
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                selectedSubject === subjectName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-4 border-t",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "space-y-3",
                                        children: subject.concepts.map((concept, index)=>{
                                            const conceptId = `${subjectName}-${index}`;
                                            const isCompleted = completedConcepts.has(conceptId);
                                            const isEditingThis = editingNote === conceptId;
                                            const hasNote = notes[conceptId] && notes[conceptId].length > 0;
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "border rounded-lg p-3 bg-gray-50",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-center cursor-pointer flex-1",
                                                                onClick: ()=>toggleConcept(subjectName, index),
                                                                children: [
                                                                    isCompleted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_CheckSquare_from_default_as_default_join_esm_icons_check_square_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                        className: "w-5 h-5 text-green-600 mr-3"
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Square_from_default_as_default_join_esm_icons_square_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                        className: "w-5 h-5 text-gray-400 mr-3"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: `${isCompleted ? "line-through text-gray-500" : "text-gray-800"} font-medium`,
                                                                        children: concept
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: ()=>startEditingNote(subjectName, index),
                                                                className: `ml-2 p-1 rounded ${hasNote ? "text-blue-600 bg-blue-100" : "text-gray-400 hover:text-blue-600"}`,
                                                                title: hasNote ? "Edit note" : "Add note",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Edit3_from_default_as_default_join_esm_icons_pen_line_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                    className: "w-4 h-4"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    isEditingThis ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                value: tempNote,
                                                                onChange: (e)=>setTempNote(e.target.value),
                                                                className: "w-full p-2 border rounded-md resize-vertical",
                                                                rows: 3,
                                                                placeholder: "Add your notes here..."
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex gap-2 mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                        onClick: ()=>saveNote(subjectName, index),
                                                                        className: "flex items-center px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Save_from_default_as_default_join_esm_icons_save_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                                className: "w-3 h-3 mr-1"
                                                                            }),
                                                                            "Save"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                        onClick: cancelEditingNote,
                                                                        className: "flex items-center px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_X_from_default_as_default_join_esm_icons_x_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                                className: "w-3 h-3 mr-1"
                                                                            }),
                                                                            "Cancel"
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }) : hasNote && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mt-2 p-2 bg-blue-50 rounded text-sm text-gray-700 whitespace-pre-wrap",
                                                        children: notes[conceptId]
                                                    })
                                                ]
                                            }, index);
                                        })
                                    })
                                })
                            ]
                        }, subjectName))
                })
            ]
        });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "min-h-screen bg-gray-100",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-6xl mx-auto p-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                    className: "bg-white shadow-md rounded-lg p-6 mb-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-3xl font-bold text-gray-800 mb-2",
                            children: "GATE CSE 2026 Preparation Tracker"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-gray-600",
                            children: "Track your progress across all subjects and concepts"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-white rounded-lg shadow-md",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-b",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                className: "flex space-x-8 px-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setActiveTab("overview"),
                                        className: `py-4 px-2 border-b-2 font-medium text-sm transition-colors ${activeTab === "overview" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_BookOpen_from_default_as_default_join_esm_icons_book_open_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                    className: "w-4 h-4 mr-2"
                                                }),
                                                "Overview"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setActiveTab("chapters"),
                                        className: `py-4 px-2 border-b-2 font-medium text-sm transition-colors ${activeTab === "chapters" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Target_from_default_as_default_join_esm_icons_target_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                    className: "w-4 h-4 mr-2"
                                                }),
                                                "Chapters"
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-6",
                            children: activeTab === "overview" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OverviewTab, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChaptersTab, {})
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                    className: "mt-8 text-center text-gray-500 text-sm",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Stay consistent and achieve your GATE 2026 goals! \uD83C\uDFAF"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GateTracker);


/***/ }),

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2411);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7272);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: "GATE CSE 2026 Preparation Tracker",
    description: "Track your GATE CSE preparation progress"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 2838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\ashut\Documents\GitHub\GateExamPrepTracker\app\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [402], () => (__webpack_exec__(9704)));
module.exports = __webpack_exports__;

})();