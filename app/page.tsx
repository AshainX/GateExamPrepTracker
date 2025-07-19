'use client'
import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, BookOpen, Target, Calendar, TrendingUp, Edit3, Save, X } from 'lucide-react';

const GateTracker = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [completedConcepts, setCompletedConcepts] = useState(new Set());
  const [notes, setNotes] = useState({});
  const [editingNote, setEditingNote] = useState(null);
  const [tempNote, setTempNote] = useState('');

  // Load data from memory on component mount
  useEffect(() => {
    // In a real app, this would load from localStorage, but we'll use component state
    const savedCompleted = new Set();
    const savedNotes = {};
    setCompletedConcepts(savedCompleted);
    setNotes(savedNotes);
  }, []);

  const subjects = {
    'Programming & Data Structures': {
      weightage: 11.5,
      priority: 'Very High',
      concepts: [
        'Arrays and Dynamic Arrays',
        'Array Rotations and Manipulations',
        'Two Pointers and Sliding Window',
        'Linked Lists (Singly, Doubly, Circular)',
        'Linked List Algorithms (Reverse, Merge, Cycle Detection)',
        'Stacks and Applications',
        'Stack Applications (Expression Evaluation, Parentheses)',
        'Queues and Circular Queues',
        'Deque and Priority Queues',
        'Binary Trees and Traversals',
        'Binary Tree Properties and Construction',
        'Binary Search Trees (BST)',
        'BST Operations and Validation',
        'AVL Trees and Rotations',
        'Red-Black Trees',
        'Heaps and Priority Queues',
        'Heap Sort and Heap Operations',
        'Hashing and Hash Tables',
        'Hash Functions and Collision Resolution',
        'Graph Representation (Adjacency List/Matrix)',
        'Graph Traversals (BFS, DFS)',
        'Shortest Path Algorithms (Dijkstra, Bellman-Ford)',
        'All Pairs Shortest Path (Floyd-Warshall)',
        'Minimum Spanning Tree (Kruskal, Prim)',
        'Topological Sorting',
        'Strongly Connected Components',
        'Articulation Points and Bridges',
        'Maximum Flow Algorithms',
        'Tries and String Processing',
        'Segment Trees and Fenwick Trees'
      ]
    },
    'Computer Organization & Architecture': {
      weightage: 11.25,
      priority: 'Very High',
      concepts: [
        'Number Systems and Base Conversions',
        'Binary Arithmetic and Overflow',
        'Fixed Point and Floating Point Representation',
        'Computer Arithmetic (Addition, Subtraction, Multiplication)',
        'Booth\'s Multiplication Algorithm',
        'Division Algorithms',
        'Instruction Set Architecture (RISC vs CISC)',
        'Instruction Formats and Types',
        'Addressing Modes',
        'CPU Design and Control Unit',
        'Hardwired vs Microprogrammed Control',
        'Pipelining Fundamentals',
        'Pipeline Performance and Speedup',
        'Pipeline Hazards (Structural, Data, Control)',
        'Hazard Detection and Resolution',
        'Branch Prediction',
        'Cache Memory Organization',
        'Cache Mapping Techniques (Direct, Associative, Set-Associative)',
        'Cache Replacement Policies',
        'Cache Coherence and Write Policies',
        'Virtual Memory and Address Translation',
        'Page Replacement Algorithms',
        'Memory Hierarchy and Performance',
        'I/O Organization and Interfaces',
        'Interrupt Handling and DMA',
        'Bus Architecture and Protocols',
        'Multiprocessor Systems',
        'Performance Metrics (CPI, MIPS, Speedup)',
        'Memory Interleaving',
        'GPU Architecture Basics'
      ]
    },
    'General Aptitude': {
      weightage: 14.75,
      priority: 'Very High',
      concepts: [
        'Percentages and Applications',
        'Profit and Loss Problems',
        'Simple and Compound Interest',
        'Ratio and Proportion',
        'Time and Work Problems',
        'Pipes and Cisterns',
        'Time, Speed and Distance',
        'Relative Speed and Motion',
        'Boats and Streams',
        'Trains and Platform Problems',
        'Probability Fundamentals',
        'Conditional Probability',
        'Permutations and Combinations',
        'Arrangements and Selections',
        'Number Series and Patterns',
        'Data Interpretation (Tables, Charts, Graphs)',
        'Reading Comprehension',
        'Paragraph Summary',
        'Verbal Analogies',
        'Synonyms and Antonyms',
        'Grammar and Usage',
        'Sentence Completion',
        'Critical Reasoning',
        'Logical Deduction',
        'Blood Relations',
        'Direction Sense',
        'Coding and Decoding',
        'Clocks and Calendars',
        'Ages Problems',
        'Mixture and Alligation'
      ]
    },
    'Operating Systems': {
      weightage: 8.5,
      priority: 'High',
      concepts: [
        'Process Management and Process States',
        'Process Control Block (PCB)',
        'Context Switching',
        'CPU Scheduling Algorithms (FCFS, SJF, Priority, RR)',
        'Multilevel Queue Scheduling',
        'Process Synchronization Problems',
        'Critical Section and Mutual Exclusion',
        'Semaphores and Mutex',
        'Classical Synchronization Problems',
        'Deadlocks and Deadlock Prevention',
        'Deadlock Avoidance (Banker\'s Algorithm)',
        'Deadlock Detection and Recovery',
        'Memory Management Techniques',
        'Contiguous Memory Allocation',
        'Paging and Segmentation',
        'Virtual Memory Management',
        'Demand Paging and Page Faults',
        'Page Replacement Algorithms',
        'Thrashing and Working Set Model',
        'File Systems and Directory Structure',
        'File Allocation Methods',
        'Free Space Management',
        'I/O Management and Scheduling',
        'Disk Scheduling Algorithms',
        'System Calls and System Programs',
        'Threads and Multithreading',
        'Thread Synchronization',
        'Inter-Process Communication (IPC)',
        'Security and Protection',
        'Distributed Operating Systems'
      ]
    },
    'Computer Networks': {
      weightage: 9.0,
      priority: 'High',
      concepts: [
        'OSI Reference Model',
        'TCP/IP Protocol Suite',
        'Network Topologies',
        'Physical Layer and Transmission Media',
        'Digital and Analog Transmission',
        'Multiplexing Techniques',
        'Data Link Layer Functions',
        'Framing and Error Detection',
        'Error Correction Codes',
        'Flow Control Protocols',
        'Sliding Window Protocols',
        'HDLC and PPP',
        'MAC Protocols (CSMA/CD, CSMA/CA)',
        'Ethernet and IEEE 802.11',
        'Network Layer and IP Addressing',
        'IPv4 and IPv6',
        'Subnetting and CIDR',
        'Routing Algorithms (Distance Vector, Link State)',
        'RIP, OSPF, and BGP',
        'ARP and RARP',
        'ICMP and Network Management',
        'Transport Layer Services',
        'TCP and UDP Protocols',
        'TCP Connection Management',
        'Flow Control and Congestion Control',
        'Application Layer Protocols',
        'HTTP, HTTPS, FTP, SMTP',
        'DNS and DHCP',
        'Network Security Fundamentals',
        'Cryptography Basics',
        'Firewalls and VPNs',
        'Quality of Service (QoS)',
        'Mobile and Wireless Networks'
      ]
    },
    'Discrete Mathematics': {
      weightage: 9.0,
      priority: 'High',
      concepts: [
        'Propositional Logic and Truth Tables',
        'Logical Connectives and Equivalences',
        'Predicate Logic and Quantifiers',
        'Mathematical Induction',
        'Set Theory Operations',
        'Relations and Properties',
        'Equivalence and Partial Order Relations',
        'Functions and Types (Injective, Surjective, Bijective)',
        'Composition and Inverse Functions',
        'Graph Theory Fundamentals',
        'Types of Graphs and Representations',
        'Graph Connectivity and Components',
        'Trees and Properties',
        'Spanning Trees and Algorithms',
        'Planar Graphs and Euler\'s Formula',
        'Graph Coloring',
        'Hamiltonian and Eulerian Paths',
        'Combinatorics Principles',
        'Counting Techniques',
        'Pigeonhole Principle Applications',
        'Inclusion-Exclusion Principle',
        'Generating Functions',
        'Recurrence Relations and Solutions',
        'Group Theory Basics',
        'Algebraic Structures',
        'Boolean Algebra and Laws',
        'Normal Forms (DNF, CNF)',
        'Lattices and Partial Orders',
        'Number Theory Basics',
        'Modular Arithmetic and Applications'
      ]
    },
    'Theory of Computation': {
      weightage: 8.0,
      priority: 'High',
      concepts: [
        'Finite Automata (DFA) Construction',
        'Non-deterministic Finite Automata (NFA)',
        'NFA to DFA Conversion',
        'Regular Expressions and Languages',
        'Conversion between RE and FA',
        'Regular Language Properties',
        'Pumping Lemma for Regular Languages',
        'Context-Free Grammars (CFG)',
        'Derivations and Parse Trees',
        'Ambiguity in CFGs',
        'Normal Forms (CNF, GNF)',
        'Pushdown Automata (PDA)',
        'CFG to PDA Conversion',
        'Context-Free Language Properties',
        'Pumping Lemma for CFLs',
        'Turing Machines and Variants',
        'TM as Language Acceptors',
        'Church-Turing Thesis',
        'Decidable and Undecidable Problems',
        'Halting Problem',
        'Rice\'s Theorem',
        'Complexity Classes (P, NP, NP-Complete)',
        'Cook\'s Theorem',
        'NP-Complete Problems',
        'Reduction Techniques',
        'Space Complexity Classes',
        'Hierarchy Theorems',
        'Recursively Enumerable Languages',
        'Post Correspondence Problem',
        'Linear Bounded Automata'
      ]
    },
    'Database Management Systems': {
      weightage: 6.75,
      priority: 'Medium',
      concepts: [
        'Database System Architecture',
        'ER Model and ER Diagrams',
        'Enhanced ER Model',
        'ER to Relational Mapping',
        'Relational Model Concepts',
        'Relational Algebra Operations',
        'Tuple and Domain Relational Calculus',
        'SQL Fundamentals and DDL',
        'SQL Queries and DML',
        'Complex SQL Queries and Joins',
        'Nested Queries and Correlated Subqueries',
        'Views and Stored Procedures',
        'Functional Dependencies',
        'Normalization (1NF, 2NF, 3NF)',
        'BCNF and Higher Normal Forms',
        'Multi-valued Dependencies and 4NF',
        'Denormalization Strategies',
        'Transaction Management',
        'ACID Properties',
        'Concurrency Control Techniques',
        'Lock-Based Protocols',
        'Timestamp-Based Protocols',
        'Deadlock Handling in DBMS',
        'Recovery Techniques',
        'Log-Based Recovery',
        'Indexing and B-trees',
        'B+ Trees and Hashing',
        'Query Processing and Optimization',
        'Cost-Based Optimization',
        'Distributed Databases',
        'NoSQL Databases',
        'Data Warehousing Concepts'
      ]
    },
    'Algorithms': {
      weightage: 6.25,
      priority: 'Medium',
      concepts: [
        'Algorithm Analysis Fundamentals',
        'Time and Space Complexity',
        'Asymptotic Notations (Big O, Theta, Omega)',
        'Best, Worst, and Average Case Analysis',
        'Divide and Conquer Paradigm',
        'Master Theorem Applications',
        'Merge Sort and Quick Sort',
        'Binary Search and Variations',
        'Sorting Algorithms Comparison',
        'Counting Sort and Radix Sort',
        'Searching in Sorted Arrays',
        'Dynamic Programming Concepts',
        'Optimal Substructure and Overlapping Subproblems',
        'Classical DP Problems (LCS, LIS, Knapsack)',
        'Matrix Chain Multiplication',
        'Greedy Algorithm Design',
        'Activity Selection and Fractional Knapsack',
        'Huffman Coding',
        'Minimum Spanning Tree Algorithms',
        'Single Source Shortest Path',
        'All Pairs Shortest Path',
        'Backtracking Algorithms',
        'N-Queens and Graph Coloring',
        'Branch and Bound Technique',
        'String Matching Algorithms',
        'KMP and Rabin-Karp Algorithms',
        'Network Flow Algorithms',
        'Maximum Bipartite Matching',
        'Approximation Algorithms',
        'Randomized Algorithms',
        'Amortized Analysis',
        'Advanced Data Structure Applications'
      ]
    },
    'Engineering Mathematics': {
      weightage: 6.0,
      priority: 'Medium',
      concepts: [
        'Linear Algebra Fundamentals',
        'Matrices and Matrix Operations',
        'Determinants and Properties',
        'System of Linear Equations',
        'Eigenvalues and Eigenvectors',
        'Diagonalization of Matrices',
        'Vector Spaces and Linear Independence',
        'Inner Product Spaces',
        'Calculus - Limits and Continuity',
        'Differentiation Rules and Applications',
        'Partial Derivatives and Chain Rule',
        'Maxima and Minima Problems',
        'Integration Techniques',
        'Definite Integrals and Applications',
        'Multiple Integrals',
        'Differential Equations (First Order)',
        'Linear Differential Equations',
        'Applications of Differential Equations',
        'Probability Theory Fundamentals',
        'Conditional Probability and Bayes\' Theorem',
        'Random Variables and Distributions',
        'Discrete Probability Distributions',
        'Continuous Probability Distributions',
        'Joint Probability Distributions',
        'Expectation and Variance',
        'Central Limit Theorem',
        'Statistical Inference',
        'Hypothesis Testing',
        'Correlation and Regression',
        'Fourier Series and Transforms',
        'Laplace Transforms',
        'Complex Numbers and Functions'
      ]
    },
    'Digital Logic': {
      weightage: 5.0,
      priority: 'Medium',
      concepts: [
        'Number Systems and Conversions',
        'Binary Arithmetic Operations',
        'Boolean Algebra Fundamentals',
        'Boolean Laws and Theorems',
        'Logic Gates and Truth Tables',
        'Universal Gates (NAND, NOR)',
        'Combinational Circuit Analysis',
        'Combinational Circuit Design',
        'Karnaugh Maps (K-Maps)',
        'K-Map Simplification Techniques',
        'Quine-McCluskey Method',
        'Multiplexers and Applications',
        'Demultiplexers and Decoders',
        'Encoders and Priority Encoders',
        'Adders (Half, Full, Ripple Carry)',
        'Subtractors and Comparators',
        'Sequential Circuit Fundamentals',
        'Latches (SR, D, JK)',
        'Flip-Flops and Timing',
        'Edge-Triggered Flip-Flops',
        'Registers and Shift Registers',
        'Counters (Asynchronous, Synchronous)',
        'Modulo-N Counters',
        'Ring and Johnson Counters',
        'Memory Elements and Organization',
        'RAM and ROM Types',
        'Programmable Logic Devices',
        'State Machines and State Diagrams',
        'Finite State Machine Design',
        'Hazards and Race Conditions',
        'Timing Analysis in Digital Circuits',
        'CMOS Logic and Power Dissipation'
      ]
    },
    'Compiler Design': {
      weightage: 4.75,
      priority: 'Low',
      concepts: [
        'Compiler Architecture and Phases',
        'Lexical Analysis Fundamentals',
        'Regular Expressions in Lexical Analysis',
        'Finite Automata for Lexical Analysis',
        'Lex Tool and Lexical Analyzer Generation',
        'Token Recognition and Symbol Table',
        'Syntax Analysis Overview',
        'Context-Free Grammars in Parsing',
        'Top-Down Parsing Techniques',
        'Recursive Descent Parsing',
        'LL(1) Parsing',
        'First and Follow Sets',
        'Bottom-Up Parsing',
        'LR(0) and SLR(1) Parsing',
        'LALR(1) and LR(1) Parsing',
        'Yacc Tool and Parser Generation',
        'Error Recovery in Parsing',
        'Semantic Analysis',
        'Syntax-Directed Translation',
        'Attribute Grammars',
        'Type Checking and Type Systems',
        'Symbol Table Management',
        'Intermediate Code Generation',
        'Three-Address Code',
        'Code Optimization Techniques',
        'Local and Global Optimization',
        'Data Flow Analysis',
        'Code Generation',
        'Instruction Selection',
        'Register Allocation',
        'Runtime Environment',
        'Memory Organization and Management'
      ]
    }
  };

  const toggleConcept = (subjectName, conceptIndex) => {
    const conceptId = `${subjectName}-${conceptIndex}`;
    const newCompleted = new Set(completedConcepts);
    
    if (newCompleted.has(conceptId)) {
      newCompleted.delete(conceptId);
    } else {
      newCompleted.add(conceptId);
    }
    
    setCompletedConcepts(newCompleted);
  };

  const saveNote = (subjectName, conceptIndex) => {
    const conceptId = `${subjectName}-${conceptIndex}`;
    const newNotes = { ...notes };
    newNotes[conceptId] = tempNote;
    setNotes(newNotes);
    setEditingNote(null);
    setTempNote('');
  };

  const startEditingNote = (subjectName, conceptIndex) => {
    const conceptId = `${subjectName}-${conceptIndex}`;
    setEditingNote(conceptId);
    setTempNote(notes[conceptId] || '');
  };

  const cancelEditingNote = () => {
    setEditingNote(null);
    setTempNote('');
  };

  const calculateProgress = () => {
    let totalConcepts = 0;
    let completedCount = 0;
    let subjectProgress = {};

    Object.entries(subjects).forEach(([subjectName, subject]) => {
      const subjectTotal = subject.concepts.length;
      let subjectCompleted = 0;

      subject.concepts.forEach((_, index) => {
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
        percentage: subjectTotal > 0 ? Math.round((subjectCompleted / subjectTotal) * 100) : 0,
        weightage: subject.weightage
      };
    });

    return {
      overall: totalConcepts > 0 ? Math.round((completedCount / totalConcepts) * 100) : 0,
      subjects: subjectProgress,
      totalCompleted: completedCount,
      totalConcepts: totalConcepts
    };
  };

  const progress = calculateProgress();

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Very High': return 'text-red-600 bg-red-50';
      case 'High': return 'text-orange-600 bg-orange-50';
      case 'Medium': return 'text-yellow-600 bg-yellow-50';
      case 'Low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const OverviewTab = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">GATE CSE 2026 Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Target className="w-5 h-5 mr-2" />
              <span className="font-medium">Overall Progress</span>
            </div>
            <div className="text-3xl font-bold">{progress.overall}%</div>
            <div className="text-sm opacity-90">{progress.totalCompleted}/{progress.totalConcepts} concepts</div>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="font-medium">Target Date</span>
            </div>
            <div className="text-xl font-bold">Feb 2026</div>
            <div className="text-sm opacity-90">197 days remaining</div>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span className="font-medium">Target Score</span>
            </div>
            <div className="text-xl font-bold">90+ marks</div>
            <div className="text-sm opacity-90">AIR 1-500</div>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <h3 className="text-xl font-semibold text-gray-800">Subject-wise Progress</h3>
        {Object.entries(progress.subjects)
          .sort((a, b) => b[1].weightage - a[1].weightage)
          .map(([subjectName, subjectData]) => (
            <div key={subjectName} className="bg-white p-4 rounded-lg shadow-md border">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h4 className="font-semibold text-gray-800">{subjectName}</h4>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(subjects[subjectName].priority)}`}>
                      {subjects[subjectName].priority} Priority
                    </span>
                    <span className="text-sm text-gray-600">{subjectData.weightage} marks</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">{subjectData.percentage}%</div>
                  <div className="text-sm text-gray-500">{subjectData.completed}/{subjectData.total}</div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${subjectData.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  const ChaptersTab = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800">All Subjects</h3>
      <div className="grid gap-4">
        {Object.entries(subjects)
          .sort((a, b) => b[1].weightage - a[1].weightage)
          .map(([subjectName, subject]) => (
            <div key={subjectName} className="bg-white rounded-lg shadow-md border overflow-hidden">
              <div 
                className="p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => setSelectedSubject(selectedSubject === subjectName ? null : subjectName)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-gray-800">{subjectName}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(subject.priority)}`}>
                        {subject.priority} Priority
                      </span>
                      <span className="text-sm text-gray-600">{subject.weightage} marks</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">
                      {progress.subjects[subjectName].percentage}%
                    </div>
                    <div className="text-sm text-gray-500">
                      {progress.subjects[subjectName].completed}/{progress.subjects[subjectName].total}
                    </div>
                  </div>
                </div>
              </div>
              
              {selectedSubject === subjectName && (
                <div className="p-4 border-t">
                  <div className="space-y-3">
                    {subject.concepts.map((concept, index) => {
                      const conceptId = `${subjectName}-${index}`;
                      const isCompleted = completedConcepts.has(conceptId);
                      const isEditingThis = editingNote === conceptId;
                      const hasNote = notes[conceptId] && notes[conceptId].length > 0;
                      
                      return (
                        <div key={index} className="border rounded-lg p-3 bg-gray-50">
                          <div className="flex items-center justify-between mb-2">
                            <div 
                              className="flex items-center cursor-pointer flex-1"
                              onClick={() => toggleConcept(subjectName, index)}
                            >
                              {isCompleted ? 
                                <CheckSquare className="w-5 h-5 text-green-600 mr-3" /> :
                                <Square className="w-5 h-5 text-gray-400 mr-3" />
                              }
                              <span className={`${isCompleted ? 'line-through text-gray-500' : 'text-gray-800'} font-medium`}>
                                {concept}
                              </span>
                            </div>
                            <button
                              onClick={() => startEditingNote(subjectName, index)}
                              className={`ml-2 p-1 rounded ${hasNote ? 'text-blue-600 bg-blue-100' : 'text-gray-400 hover:text-blue-600'}`}
                              title={hasNote ? 'Edit note' : 'Add note'}
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                          </div>
                          
                          {isEditingThis ? (
                            <div className="mt-2">
                              <textarea
                                value={tempNote}
                                onChange={(e) => setTempNote(e.target.value)}
                                className="w-full p-2 border rounded-md resize-vertical"
                                rows="3"
                                placeholder="Add your notes here..."
                              />
                              <div className="flex gap-2 mt-2">
                                <button
                                  onClick={() => saveNote(subjectName, index)}
                                  className="flex items-center px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                                >
                                  <Save className="w-3 h-3 mr-1" />
                                  Save
                                </button>
                                <button
                                  onClick={cancelEditingNote}
                                  className="flex items-center px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
                                >
                                  <X className="w-3 h-3 mr-1" />
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : hasNote && (
                            <div className="mt-2 p-2 bg-blue-50 rounded text-sm text-gray-700 whitespace-pre-wrap">
                              {notes[conceptId]}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-4">
        <header className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">GATE CSE 2026 Preparation Tracker</h1>
          <p className="text-gray-600">Track your progress across all subjects and concepts</p>
        </header>

        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'overview' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Overview
                </div>
              </button>
              <button
                onClick={() => setActiveTab('chapters')}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'chapters' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  Chapters
                </div>
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' ? <OverviewTab /> : <ChaptersTab />}
          </div>
        </div>

        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Stay consistent and achieve your GATE 2026 goals! 🎯</p>
        </footer>
      </div>
    </div>
  );
};

export default GateTracker;