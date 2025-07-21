'use client'
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { CheckSquare, Square, BookOpen, Target, Calendar, TrendingUp, Edit3, Save, X, Play, Pause, ArrowLeft, Music } from 'lucide-react';
import { db } from '../lib/firebase';
import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';

const GateTracker = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [completedConcepts, setCompletedConcepts] = useState(new Set());
  const [notes, setNotes] = useState({});
  const [editingNote, setEditingNote] = useState(null);
  const [tempNote, setTempNote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [syncPending, setSyncPending] = useState(false);
  
  // Add ref for textarea to maintain focus
  const textareaRef = useRef(null);

  const userId = 'demo-user';

  // Memoized subjects data to prevent re-renders
  const subjects = useMemo(() => ({
    'Programming & Data Structures': {
      weightage: 11.5,
      priority: 'Very High',
      color: 'from-purple-600 to-blue-600',
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
      color: 'from-red-600 to-pink-600',
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
      color: 'from-green-600 to-teal-600',
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
      color: 'from-orange-600 to-yellow-600',
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
      color: 'from-blue-600 to-indigo-600',
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
      color: 'from-indigo-600 to-purple-600',
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
      color: 'from-pink-600 to-red-600',
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
      color: 'from-teal-600 to-green-600',
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
      color: 'from-yellow-600 to-orange-600',
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
      color: 'from-purple-600 to-pink-600',
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
      color: 'from-cyan-600 to-blue-600',
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
      color: 'from-gray-600 to-slate-600',
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
  }), []);

  

  // FIXED: Improved debounced save function with longer delay
  const debouncedSave = useCallback(
    (() => {
      let timeoutId;
      return (newCompletedConcepts, newNotes) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          saveProgress(newCompletedConcepts, newNotes);
        }, 2000); // Increased to 2 seconds to prevent interference during typing
      };
    })(),
    []
  );

  // Local Storage functions - optimized
  const saveToLocalStorage = useCallback((data) => {
    try {
      const cacheData = {
        ...data,
        timestamp: Date.now()
      };
      localStorage.setItem('gateTracker-cache', JSON.stringify(cacheData));
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  }, []);

  const loadFromLocalStorage = useCallback(() => {
    try {
      const cached = localStorage.getItem('gateTracker-cache');
      if (cached) {
        const data = JSON.parse(cached);
        // Cache valid for 10 minutes
        if (Date.now() - data.timestamp < 10 * 60 * 1000) {
          return data;
        }
      }
    } catch (error) {
      console.warn('Failed to load from localStorage:', error);
    }
    return null;
  }, []);

  // Online/Offline detection
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      // Sync when coming back online
      if (syncPending) {
        saveProgress();
        setSyncPending(false);
      }
    };
    const handleOffline = () => setIsOnline(false);
    
    setIsOnline(navigator.onLine);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [syncPending]);

  // FIXED: Load initial data - optimized with better editing state handling
  useEffect(() => {
    let isMounted = true;
    
    const loadData = async () => {
      // First, load from cache for instant UI
      const cachedData = loadFromLocalStorage();
      if (cachedData && isMounted) {
        setCompletedConcepts(new Set(cachedData.completedConcepts || []));
        setNotes(cachedData.notes || {});
        setIsLoading(false);
      }

      // Then load from Firebase
      if (isOnline) {
        try {
          const docRef = doc(db, 'users', userId);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists() && isMounted) {
            const data = docSnap.data();
            const newCompletedConcepts = new Set(data.completedConcepts || []);
            const newNotes = data.notes || {};
            
            setCompletedConcepts(newCompletedConcepts);
            setNotes(newNotes);
            saveToLocalStorage({ completedConcepts: data.completedConcepts || [], notes: newNotes });
          }
        } catch (error) {
          console.error('Error loading from Firebase:', error);
        }
      }
      
      if (isMounted) {
        setIsLoading(false);
      }
    };

    loadData();

    // FIXED: Real-time listener - prevented updates during editing
    let unsubscribe = () => {};
    if (isOnline) {
      unsubscribe = onSnapshot(doc(db, 'users', userId), (doc) => {
        if (doc.exists() && isMounted && editingNote === null) { // Only update when not editing
          const data = doc.data();
          const newCompletedConcepts = new Set(data.completedConcepts || []);
          const newNotes = data.notes || {};
          
          setCompletedConcepts(newCompletedConcepts);
          setNotes(newNotes);
          saveToLocalStorage({ completedConcepts: data.completedConcepts || [], notes: newNotes });
        }
      });
    }

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, [isOnline, loadFromLocalStorage, saveToLocalStorage, editingNote]);

  // Optimized save function with better error handling
  const saveProgress = useCallback(async (newCompletedConcepts = completedConcepts, newNotes = notes) => {
    const optimizedData = {
      completedConcepts: Array.from(newCompletedConcepts),
      notes: Object.fromEntries(
        Object.entries(newNotes).filter(([, value]) => 
          typeof value === 'string' && value.trim() !== ''
        )
      ),
      lastUpdated: new Date().toISOString(),
      totalConcepts: Object.values(subjects).reduce((sum, subject) => sum + subject.concepts.length, 0),
      completedCount: newCompletedConcepts.size
    };
    
    // Always save to local storage first
    saveToLocalStorage(optimizedData);
    
    if (!isOnline) {
      setSyncPending(true);
      console.log('Offline - data saved locally, will sync when online');
      return;
    }
    
    try {
      setIsSaving(true);
      await setDoc(doc(db, 'users', userId), optimizedData, { merge: true });
      setSyncPending(false);
    } catch (error) {
      console.error('Error saving to Firebase:', error);
      setSyncPending(true);
    } finally {
      setIsSaving(false);
    }
  }, [completedConcepts, notes, subjects, isOnline, saveToLocalStorage]);

  // Optimized toggle function
  const toggleConcept = useCallback((subjectName, conceptIndex) => {
    const conceptId = `${subjectName}-${conceptIndex}`;
    
    setCompletedConcepts(prevCompleted => {
      const newCompleted = new Set(prevCompleted);
      
      if (newCompleted.has(conceptId)) {
        newCompleted.delete(conceptId);
      } else {
        newCompleted.add(conceptId);
      }
      
      // Immediate local storage save and debounced Firebase save
      const currentNotes = notes;
      saveToLocalStorage({
        completedConcepts: Array.from(newCompleted),
        notes: currentNotes
      });
      debouncedSave(newCompleted, currentNotes);
      
      return newCompleted;
    });
  }, [notes, saveToLocalStorage, debouncedSave]);

  // FIXED: Note saving with proper focus handling
  const saveNote = useCallback((subjectName, conceptIndex) => {
    const conceptId = `${subjectName}-${conceptIndex}`;
    // Get the actual value from the textarea ref instead of state
    const actualValue = textareaRef.current ? textareaRef.current.value : tempNote;
    const newNotes = { ...notes, [conceptId]: actualValue };
    
    setNotes(newNotes);
    setEditingNote(null);
    setTempNote('');
    
    // Immediate save without affecting textarea focus
    saveToLocalStorage({
      completedConcepts: Array.from(completedConcepts),
      notes: newNotes
    });
    debouncedSave(completedConcepts, newNotes);
  }, [notes, tempNote, completedConcepts, saveToLocalStorage, debouncedSave]);

  // FIXED: Start editing with proper focus management
  const startEditingNote = useCallback((subjectName, conceptIndex) => {
    const conceptId = `${subjectName}-${conceptIndex}`;
    setEditingNote(conceptId);
    setTempNote(notes[conceptId] || '');
    
    // Focus textarea after state updates
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        // Set cursor to end of text
        const length = textareaRef.current.value.length;
        textareaRef.current.setSelectionRange(length, length);
      }
    }, 0);
  }, [notes]);

  const cancelEditingNote = useCallback(() => {
    setEditingNote(null);
    setTempNote('');
  }, []);

  // FIXED: Handle textarea input with robust cursor position preservation
  const handleTempNoteChange = useCallback((e) => {
    const textarea = e.target;
    const { value, selectionStart, selectionEnd } = textarea;
    
    // Store cursor position before state update
    const cursorPosition = selectionStart;
    
    setTempNote(value);
    
    // Use multiple methods to ensure cursor position is preserved
    setTimeout(() => {
      if (textarea && textarea === document.activeElement) {
        textarea.setSelectionRange(cursorPosition, cursorPosition);
        textarea.focus();
      }
    }, 0);
    
    requestAnimationFrame(() => {
      if (textarea && textarea === document.activeElement) {
        textarea.setSelectionRange(cursorPosition, cursorPosition);
      }
    });
  }, []);

  // Memoized progress calculation
  const progress = useMemo(() => {
    let totalConcepts = 0;
    let completedCount = 0;
    const subjectProgress = {};

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
  }, [completedConcepts, subjects]);

  const getWeightageColor = useCallback((weightage) => {
    if (weightage >= 10) return 'text-red-400';
    if (weightage >= 8) return 'text-orange-400';
    if (weightage >= 6) return 'text-yellow-400';
    return 'text-green-400';
  }, []);

  // Simplified loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-white">Loading your study playlists...</p>
        </div>
      </div>
    );
  }

    // Calculate days left for Feb 2026 GATE exam
  const targetDate = new Date('2026-02-01T00:00:00+05:30'); // Update as needed
  const now = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysRemaining = Math.max(0, Math.ceil((targetDate - now) / msPerDay));


const MainView = () => (
  <div className="min-h-screen bg-black text-white">
    {/* Top Header */}
    <div className="sticky top-0 bg-black bg-opacity-90 backdrop-blur-md z-10 px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Preparation Tracker - GATE 2026 !!
          </h1>
          <p className="text-gray-400 mt-1">Sabubele 6 Ghanta de bujhilu!!</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm">
            {!isOnline ? (
              <div className="flex items-center text-red-400">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                Offline {syncPending && '(Sync Pending)'}
              </div>
            ) : isSaving ? (
              <div className="flex items-center text-yellow-400">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-400 mr-2"></div>
                Syncing...
              </div>
            ) : (
              <div className="flex items-center text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Synced
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* Overall Stats */}
    <div className="px-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 rounded-xl">
          <div className="flex items-center mb-2">
            <Target className="w-6 h-6 mr-2" />
            <span className="font-medium">Overall Progress</span>
          </div>
          <div className="text-3xl font-bold">{progress.overall}%</div>
          <div className="text-sm opacity-90">{progress.totalCompleted}/{progress.totalConcepts} concepts mastered</div>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl">
          <div className="flex items-center mb-2">
            <Calendar className="w-6 h-6 mr-2" />
            <span className="font-medium">Target Date</span>
          </div>
          <div className="text-2xl font-bold">Feb 2026</div>
          <div className="text-sm opacity-90">{daysRemaining} days remaining</div>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl">
          <div className="flex items-center mb-2">
            <TrendingUp className="w-6 h-6 mr-2" />
            <span className="font-medium">Target Score</span>
          </div>
          <div className="text-2xl font-bold">90+ marks</div>
          <div className="text-sm opacity-90">AIR 1-500</div>
        </div>
        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 rounded-xl">
          <div className="flex items-center mb-2">
            <Music className="w-6 h-6 mr-2" />
            <span className="font-medium">Study Sessions</span>
          </div>
          <div className="text-2xl font-bold">{Object.keys(subjects).length}</div>
          <div className="text-sm opacity-90">Subject playlists</div>
        </div>
      </div>

      {/* Subject Grid - ADD THIS SECTION */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-white">Your Study Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(subjects)
            .sort((a, b) => b[1].weightage - a[1].weightage)
            .map(([subjectName, subject]) => {
              const subjectProgress = progress.subjects[subjectName];
              return (
                <div 
                  key={subjectName} 
                  className="group cursor-pointer"
                  onClick={() => setSelectedSubject(subjectName)}
                >
                  <div className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-6 rounded-xl relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors">
                            {subjectName}
                          </h3>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className={`text-sm font-medium ${getWeightageColor(subject.weightage)}`}>
                              {subject.weightage} marks
                            </span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-400">{subject.concepts.length} topics</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{subjectProgress.percentage}%</div>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-500" 
                          style={{ width: `${subjectProgress.percentage}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{subjectProgress.completed}/{subjectProgress.total} completed</span>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Play className="w-5 h-5 text-green-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  </div>
);


  // Playlist view (like Spotify playlist)
  const PlaylistView = () => {
    const subject = subjects[selectedSubject];
    const subjectProgress = progress.subjects[selectedSubject];
    
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <div className="relative">
          <div className={`bg-gradient-to-b ${subject.color} px-8 py-12`}>
            <button 
              onClick={() => setSelectedSubject(null)}
              className="mb-6 flex items-center text-white hover:text-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Library
            </button>
            
            <div className="flex items-end space-x-6">
              <div className="w-48 h-48 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                <Music className="w-20 h-20 text-white opacity-80" />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-wider opacity-90">Study Playlist</p>
                <h1 className="text-5xl font-bold mb-4">{selectedSubject}</h1>
                <div className="flex items-center space-x-4 text-sm">
                  <span>{subject.concepts.length} topics</span>
                  <span>•</span>
                  <span>{subjectProgress.completed} completed</span>
                  <span>•</span>
                  <span className="font-medium">{subject.weightage} marks</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* Playlist Content */}
        <div className="px-8 py-6">
          {/* Play Button */}
          <div className="mb-8">
            <button className="bg-green-500 hover:bg-green-400 text-black px-8 py-3 rounded-full font-bold transition-colors flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Start Studying
            </button>
          </div>

          {/* Track List */}
          <div className="space-y-2">
            {subject.concepts.map((concept, index) => {
              const conceptId = `${selectedSubject}-${index}`;
              const isCompleted = completedConcepts.has(conceptId);
              const isEditingThis = editingNote === conceptId;
              const hasNote = notes[conceptId] && notes[conceptId].length > 0;

              return (
                <div key={index} className="group hover:bg-gray-800 rounded-lg p-3 transition-colors">
                  <div className="flex items-center space-x-4">
                    {/* Track Number / Play Button */}
                    <div className="w-8 text-center">
                      <span className="text-gray-400 group-hover:hidden text-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <button 
                        onClick={() => toggleConcept(selectedSubject, index)}
                        className="hidden group-hover:block"
                      >
                        {isCompleted ? 
                          <CheckSquare className="w-5 h-5 text-green-500" /> :
                          <Square className="w-5 h-5 text-gray-400 hover:text-white" />
                        }
                      </button>
                    </div>

                    {/* Track Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <span className={`font-medium ${isCompleted ? 'text-green-400 line-through' : 'text-white'}`}>
                          {concept}
                        </span>
                        {hasNote && (
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        )}
                      </div>
                      {hasNote && !isEditingThis && (
                        <div className="mt-2 text-sm text-gray-400 bg-gray-800 p-3 rounded">
                          {notes[conceptId]}
                        </div>
                      )}
                      {isEditingThis && (
                        <div className="mt-2 space-y-2">
                          <textarea
                            ref={textareaRef}
                            defaultValue={tempNote}
                            className="w-full p-3 bg-gray-700 text-white rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            rows={3}
                            placeholder="Add your study notes..."
                            onKeyDown={(e) => {
                              // Prevent parent handlers from interfering
                              e.stopPropagation();
                              // Save on Ctrl+Enter
                              if (e.ctrlKey && e.key === 'Enter') {
                                saveNote(selectedSubject, index);
                              }
                              // Cancel on Escape
                              if (e.key === 'Escape') {
                                cancelEditingNote();
                              }
                            }}
                            autoFocus
                          />
                          <div className="flex space-x-2">
                            <button
                              onClick={() => saveNote(selectedSubject, index)}
                              className="flex items-center px-3 py-1 bg-green-500 text-black rounded text-sm hover:bg-green-400 transition-colors"
                            >
                              <Save className="w-3 h-3 mr-1" />
                              Save
                            </button>
                            <button
                              onClick={cancelEditingNote}
                              className="flex items-center px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-500 transition-colors"
                            >
                              <X className="w-3 h-3 mr-1" />
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          startEditingNote(selectedSubject, index);
                        }}
                        className={`p-2 rounded hover:bg-gray-700 transition-colors ${hasNote ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
                        title={hasNote ? 'Edit note' : 'Add note'}
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return selectedSubject ? <PlaylistView /> : <MainView />;
};

export default GateTracker;
