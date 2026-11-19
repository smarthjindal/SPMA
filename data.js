// Student Placement Management Analytics (SPMA) Dataset
// Domains, Curated MCA-Level Questions (75 Total), and Course Catalog (50 Total)

const DOMAINS = [
    {
        id: 'webdev',
        name: 'Web Development',
        icon: 'fa-code',
        color: 'indigo',
        bgGradient: 'from-indigo-500 to-blue-500',
        description: 'Master HTML, CSS, JavaScript and modern frameworks to build stunning web applications',
        topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
        questionCount: 15
    },
    {
        id: 'datascience',
        name: 'Data Science',
        icon: 'fa-chart-bar',
        color: 'purple',
        bgGradient: 'from-purple-500 to-pink-500',
        description: 'Learn Python, Statistics, Pandas, and Machine Learning fundamentals',
        topics: ['Python Basics', 'Statistics', 'Pandas', 'Data Visualization', 'ML Basics'],
        questionCount: 15
    },
    {
        id: 'dbms',
        name: 'Database Management',
        icon: 'fa-database',
        color: 'emerald',
        bgGradient: 'from-emerald-500 to-teal-500',
        description: 'SQL, NoSQL, Normalization, Indexing and Database Design',
        topics: ['SQL Basics', 'Advanced SQL', 'Normalization', 'NoSQL', 'Transactions'],
        questionCount: 15
    },
    {
        id: 'programming',
        name: 'Programming Fundamentals',
        icon: 'fa-laptop-code',
        color: 'amber',
        bgGradient: 'from-amber-500 to-orange-500',
        description: 'Data Structures, Algorithms, OOP concepts and Problem Solving',
        topics: ['Arrays & Strings', 'Linked Lists', 'Trees & Graphs', 'OOP', 'Time Complexity'],
        questionCount: 15
    },
    {
        id: 'cloud',
        name: 'Cloud Computing',
        icon: 'fa-cloud',
        color: 'cyan',
        bgGradient: 'from-cyan-500 to-blue-500',
        description: 'AWS, Docker, DevOps, CI/CD and Cloud Architecture',
        topics: ['Cloud Basics', 'AWS Services', 'Docker', 'CI/CD', 'Networking'],
        questionCount: 15
    }
];

const QUESTIONS = {
    webdev: [
        // Topic: HTML (3 questions)
        {
            id: 1,
            topic: 'HTML',
            question: 'Which HTML5 element is semantically designated to contain major navigational links on a webpage?',
            options: ['<navigate>', '<nav>', '<navigation>', '<menu>'],
            correct: 1,
            explanation: 'The <nav> element in HTML5 provides semantic meaning for primary blocks of navigational links.'
        },
        {
            id: 2,
            topic: 'HTML',
            question: 'In modern HTML5 web accessibility (a11y), what is the primary purpose of the aria-live attribute?',
            options: [
                'To automatically animate live SVG charts',
                'To notify screen readers of dynamic content updates without requiring a page reload',
                'To keep an active WebRTC streaming connection alive',
                'To preload media resources when a user hovers over an anchor tag'
            ],
            correct: 1,
            explanation: 'aria-live informs assistive technologies (like screen readers) that an area of the document will dynamically change.'
        },
        {
            id: 3,
            topic: 'HTML',
            question: 'Which attribute configuration on a <script> tag causes it to execute asynchronously as soon as it is downloaded, without blocking HTML parsing?',
            options: ['defer', 'async', 'preload', 'lazy'],
            correct: 1,
            explanation: 'The "async" attribute loads the script asynchronously and executes it immediately when fetched, unlike "defer" which waits for HTML parsing to complete.'
        },

        // Topic: CSS (3 questions)
        {
            id: 4,
            topic: 'CSS',
            question: 'When using CSS Flexbox, which property aligns flex items along the cross-axis?',
            options: ['justify-content', 'align-items', 'flex-direction', 'align-content'],
            correct: 1,
            explanation: 'justify-content distributes space along the main axis, whereas align-items aligns items along the perpendicular cross axis.'
        },
        {
            id: 5,
            topic: 'CSS',
            question: 'In the CSS box model calculation when "box-sizing: border-box" is set, what does an element\'s declared width include?',
            options: [
                'Content width only',
                'Content width + padding only',
                'Content width + padding + border',
                'Content width + padding + border + margin'
            ],
            correct: 2,
            explanation: 'With border-box, the specified width and height encompass the content, padding, and border, keeping sizing predictable.'
        },
        {
            id: 6,
            topic: 'CSS',
            question: 'Which selector represents the highest CSS specificity among the choices below?',
            options: [
                'div.card > p.highlight',
                '#nav-menu ul li',
                'header nav .nav-item:hover',
                'section > article.primary span'
            ],
            correct: 1,
            explanation: '#nav-menu has an ID selector (weight 1-0-0), giving it higher specificity than class, attribute, or element selectors.'
        },

        // Topic: JavaScript (3 questions)
        {
            id: 7,
            topic: 'JavaScript',
            question: 'What is the output of `console.log(typeof null)` in JavaScript according to the ECMAScript specification?',
            options: ['"null"', '"undefined"', '"object"', '"boolean"'],
            correct: 2,
            explanation: 'In JavaScript, typeof null returns "object" due to a historical legacy implementation detail from the initial design of JS.'
        },
        {
            id: 8,
            topic: 'JavaScript',
            question: 'What is the primary difference between `Promise.all()` and `Promise.allSettled()`?',
            options: [
                'Promise.allSettled rejects as soon as any promise rejects',
                'Promise.all waits for all promises to either resolve or reject before completing',
                'Promise.all rejects immediately upon any rejection, whereas Promise.allSettled waits for all promises to finish regardless of outcome',
                'Promise.all executes sequentially, while Promise.allSettled runs in parallel'
            ],
            correct: 2,
            explanation: 'Promise.all short-circuits on the first rejection, whereas Promise.allSettled returns an array describing the settled outcome of every promise.'
        },
        {
            id: 9,
            topic: 'JavaScript',
            question: 'What is a JavaScript closure?',
            options: [
                'A function that can only be called once before being garbage collected',
                'A function bundled together with references to its surrounding lexical environment',
                'A special syntax used solely inside Web Workers to isolate threads',
                'A callback passed into synchronous Array prototypes like .filter()'
            ],
            correct: 1,
            explanation: 'A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment).'
        },

        // Topic: React (3 questions)
        {
            id: 10,
            topic: 'React',
            question: 'In React, what is the primary purpose of the `useEffect` cleanup return function?',
            options: [
                'To reset component props to their default values',
                'To unsubscribe from subscriptions, clear timers, or abort fetch requests prior to unmounting/re-running',
                'To delete unused keys from the browser\'s localStorage',
                'To trigger an instant re-render of child components'
            ],
            correct: 1,
            explanation: 'The function returned inside useEffect runs during unmounting and before subsequent executions to clean up lingering side-effects.'
        },
        {
            id: 11,
            topic: 'React',
            question: 'What role does the `key` prop serve when rendering dynamic lists in React?',
            options: [
                'It sets the CSS z-index priority for list elements',
                'It enables React to uniquely identify elements to optimize DOM reconciliation and diffing',
                'It binds HTML form input elements to parent component state',
                'It provides encryption for server-side rendered DOM snapshots'
            ],
            correct: 1,
            explanation: 'Keys help React identify which items have changed, been added, or been removed, making the reconciliation diffing algorithm fast.'
        },
        {
            id: 12,
            topic: 'React',
            question: 'When should you choose `useCallback` over standard function declaration inside a React component?',
            options: [
                'Whenever a function contains more than 10 lines of JavaScript',
                'To memoize a callback instance across renders to prevent unnecessary re-renders of memoized child components',
                'To run asynchronous fetch requests during initial mount',
                'To share global state across unrelated branches of the React tree'
            ],
            correct: 1,
            explanation: 'useCallback memoizes a function definition between renders, avoiding recreating callbacks passed down to optimized children (React.memo).'
        },

        // Topic: Node.js (3 questions)
        {
            id: 13,
            topic: 'Node.js',
            question: 'What mechanism in Node.js handles non-blocking I/O operations despite JavaScript running on a single main thread?',
            options: [
                'Multi-threaded DOM Parser',
                'Libuv Event Loop with Worker Thread Pool',
                'Java Virtual Machine Garbage Collector',
                'Browser Blink Engine'
            ],
            correct: 1,
            explanation: 'Node.js utilizes the Libuv library to provide an event loop and background thread pool for handling asynchronous operations.'
        },
        {
            id: 14,
            topic: 'Node.js',
            question: 'In Express.js middleware, what happens if neither `res.send()` nor `next()` is called inside a middleware function?',
            options: [
                'Express throws an UnhandledPromiseRejection immediately',
                'The server automatically responds with HTTP status 200 OK',
                'The client request hangs and eventually times out',
                'Express redirects the request to the index route'
            ],
            correct: 2,
            explanation: 'If a middleware fails to end the request-response cycle or invoke next(), the HTTP request is left dangling until client timeout.'
        },
        {
            id: 15,
            topic: 'Node.js',
            question: 'Which core module in Node.js should be used to securely create salted password hashes using modern algorithms?',
            options: ['fs', 'crypto', 'cluster', 'os'],
            correct: 1,
            explanation: 'Node.js includes the built-in "crypto" module, which provides cryptographic algorithms like scrypt, pbkdf2, and SHA-256.'
        }
    ],

    datascience: [
        // Topic: Python Basics (3 questions)
        {
            id: 1,
            topic: 'Python Basics',
            question: 'What is the key difference between a Python list and a Python tuple?',
            options: [
                'Tuples can hold heterogeneous data types, while lists cannot',
                'Lists are mutable, whereas tuples are immutable',
                'Tuples use 1-based indexing, while lists use 0-based indexing',
                'Lists use round parentheses (), while tuples use square brackets []'
            ],
            correct: 1,
            explanation: 'Lists can be modified after creation (mutable), whereas tuples cannot have elements modified or added (immutable).'
        },
        {
            id: 2,
            topic: 'Python Basics',
            question: 'What does the `*args` and `**kwargs` syntax allow in a Python function definition?',
            options: [
                'Direct pointer manipulation similar to C/C++',
                'Passing variable positional arguments (*args) and variable keyword arguments (**kwargs)',
                'Enforcing strict static data typing at runtime',
                'Multiplying numeric arguments automatically before invocation'
            ],
            correct: 1,
            explanation: '*args gathers excess positional arguments as a tuple, and **kwargs gathers excess keyword arguments as a dictionary.'
        },
        {
            id: 3,
            topic: 'Python Basics',
            question: 'What is the time complexity of checking membership (`x in my_collection`) for a Python `set` on average?',
            options: ['O(n)', 'O(log n)', 'O(1)', 'O(n^2)'],
            correct: 2,
            explanation: 'Python sets are implemented using hash tables, giving average O(1) constant time complexity for key lookups.'
        },

        // Topic: Statistics (3 questions)
        {
            id: 4,
            topic: 'Statistics',
            question: 'In a skewed dataset with extreme outliers, which measure of central tendency is the most robust?',
            options: ['Arithmetic Mean', 'Median', 'Standard Deviation', 'Variance'],
            correct: 1,
            explanation: 'The median represents the middle value and is not pulled by extreme high or low values, making it robust against outliers.'
        },
        {
            id: 5,
            topic: 'Statistics',
            question: 'What does a p-value less than alpha (e.g., p < 0.05) typically signify in formal hypothesis testing?',
            options: [
                'There is a 95% probability that the null hypothesis is true',
                'We fail to reject the null hypothesis',
                'We reject the null hypothesis in favor of the alternative hypothesis due to statistically significant evidence',
                'The sample size was too small to draw any inference'
            ],
            correct: 2,
            explanation: 'When p < 0.05, the observed data would be very unlikely under the null hypothesis, so we reject the null hypothesis.'
        },
        {
            id: 6,
            topic: 'Statistics',
            question: 'What does the Central Limit Theorem state about the distribution of sample means?',
            options: [
                'Sample means are always uniformly distributed',
                'As sample size n increases, the distribution of sample means approaches a normal distribution regardless of the population distribution shape',
                'The population variance equals the sample variance divided by n',
                'Only normally distributed populations can yield valid statistical models'
            ],
            correct: 1,
            explanation: 'The Central Limit Theorem guarantees that with a sufficiently large sample size, sample means will be normally distributed.'
        },

        // Topic: Pandas (3 questions)
        {
            id: 7,
            topic: 'Pandas',
            question: 'What is the primary difference between `.loc[]` and `.iloc[]` in Pandas?',
            options: [
                '.loc is label-based indexing, whereas .iloc is integer position-based indexing',
                '.loc modifies the dataframe in-place, whereas .iloc returns a deep copy',
                '.loc only works on Series, while .iloc works exclusively on DataFrames',
                '.loc cannot accept boolean condition arrays'
            ],
            correct: 0,
            explanation: '.loc indexes using row/column labels, while .iloc indexes strictly by numerical integer index positions (0 to n-1).'
        },
        {
            id: 8,
            topic: 'Pandas',
            question: 'Which method should be used to impute missing `NaN` values in a Pandas DataFrame with the mean of each column?',
            options: [
                'df.dropna(how="all")',
                'df.fillna(df.mean())',
                'df.replace_null(strategy="mean")',
                'df.impute_mean()'
            ],
            correct: 1,
            explanation: 'df.fillna(df.mean()) calculates the column-wise mean and fills null entries in corresponding columns.'
        },
        {
            id: 9,
            topic: 'Pandas',
            question: 'What does calling `df.groupby("department")["salary"].agg(["mean", "count"])` perform?',
            options: [
                'Filters out rows where salary is below department mean',
                'Groups rows by department and calculates both the average salary and employee count per group',
                'Deletes duplicate records in department and salary columns',
                'Sorts the dataframe ascendingly by department name'
            ],
            correct: 1,
            explanation: 'It applies the split-apply-combine operation to compute aggregate statistics (mean and count) for each distinct department.'
        },

        // Topic: Data Visualization (3 questions)
        {
            id: 10,
            topic: 'Data Visualization',
            question: 'Which plot is best suited to inspect the distribution, median, and interquartile range (IQR) of a numeric feature across categories?',
            options: ['Scatter Plot', 'Box Plot (Box-and-Whisker)', 'Pie Chart', 'Heatmap'],
            correct: 1,
            explanation: 'Box plots explicitly depict the minimum, first quartile (Q1), median, third quartile (Q3), maximum, and suspected outliers.'
        },
        {
            id: 11,
            topic: 'Data Visualization',
            question: 'In Seaborn or Matplotlib, what visual encoding does a Correlation Heatmap use to show pairwise Pearson coefficients?',
            options: [
                'Bar lengths',
                'Color intensity across a 2D matrix',
                'Node connection edge weights in a tree',
                'Radial angles in a polar circle'
            ],
            correct: 1,
            explanation: 'A correlation heatmap maps pairwise numeric values between -1 and +1 onto a color gradient grid.'
        },
        {
            id: 12,
            topic: 'Data Visualization',
            question: 'What type of chart is ideal for showing continuous changes in a numeric metric over sequential timestamps?',
            options: ['Line Chart', 'Radar Chart', 'Treemap', 'Doughnut Chart'],
            correct: 0,
            explanation: 'Line charts are the standard choice for time-series data to illustrate trends, seasonality, and intervals over time.'
        },

        // Topic: ML Basics (3 questions)
        {
            id: 13,
            topic: 'ML Basics',
            question: 'What is overfitting in a supervised machine learning model?',
            options: [
                'The model fails to learn patterns in both training and test data',
                'The model performs exceptionally well on training data but generalizes poorly to unseen test data',
                'The model has too few parameters to capture the true underlying distribution',
                'The model finishes training in fewer iterations than expected'
            ],
            correct: 1,
            explanation: 'Overfitting occurs when a model captures random noise along with signals in training data, resulting in poor generalizability.'
        },
        {
            id: 14,
            topic: 'ML Basics',
            question: 'Which metric is most informative when evaluating a classification model on an imbalanced dataset (e.g., 99% negative vs 1% fraud)?',
            options: ['Raw Accuracy', 'Precision, Recall, and F1-Score', 'Mean Squared Error (MSE)', 'R-squared (R2)'],
            correct: 1,
            explanation: 'Accuracy is misleading on imbalanced datasets (a dummy classifier guessing negative gets 99%), making Precision, Recall, and F1 critical.'
        },
        {
            id: 15,
            topic: 'ML Basics',
            question: 'What is the main distinction between Supervised Learning and Unsupervised Learning?',
            options: [
                'Supervised uses GPU acceleration, while unsupervised uses only CPUs',
                'Supervised requires labeled ground-truth targets (y), while unsupervised discovers latent patterns in unlabeled data (X)',
                'Supervised is restricted to linear algorithms, while unsupervised is strictly non-linear',
                'Supervised models cannot be used for predictive analytics'
            ],
            correct: 1,
            explanation: 'Supervised learning trains on inputs paired with known target labels; unsupervised learning discovers groupings without preset labels.'
        }
    ],

    dbms: [
        // Topic: SQL Basics (3 questions)
        {
            id: 1,
            topic: 'SQL Basics',
            question: 'Which SQL clause is used to filter aggregated group records after a GROUP BY statement has executed?',
            options: ['WHERE', 'HAVING', 'FILTER BY', 'ORDER BY'],
            correct: 1,
            explanation: 'WHERE filters individual row records before grouping, whereas HAVING filters aggregated grouped rows.'
        },
        {
            id: 2,
            topic: 'SQL Basics',
            question: 'What is the effect of an `INNER JOIN` between two tables A and B on column `id`?',
            options: [
                'Returns all rows from table A and table B regardless of matches',
                'Returns only rows that have matching values in both tables',
                'Returns all rows from A plus unmatched rows from B',
                'Returns the Cartesian product without any predicate'
            ],
            correct: 1,
            explanation: 'An INNER JOIN selects only records where the specified join predicate evaluates to true in both participating relations.'
        },
        {
            id: 3,
            topic: 'SQL Basics',
            question: 'Which statement correctly prevents duplicate entries in the query result set?',
            options: ['SELECT UNIQUE name FROM users;', 'SELECT DISTINCT name FROM users;', 'SELECT DIFFERENT name FROM users;', 'SELECT NON_DUPLICATE name FROM users;'],
            correct: 1,
            explanation: 'The DISTINCT keyword in SQL discards duplicate rows from the final result set of a SELECT query.'
        },

        // Topic: Advanced SQL (3 questions)
        {
            id: 4,
            topic: 'Advanced SQL',
            question: 'What is the primary difference between `RANK()` and `DENSE_RANK()` window functions when duplicate values occur?',
            options: [
                'RANK() assigns identical ranks and skips subsequent numbers, whereas DENSE_RANK() does not skip numbers',
                'DENSE_RANK() assigns ranks alphabetically, whereas RANK() uses numeric order',
                'RANK() requires an aggregate GROUP BY clause, while DENSE_RANK() does not',
                'There is no difference in standard ANSI SQL'
            ],
            correct: 0,
            explanation: 'If two rows tie for 1st place, RANK() gives 1, 1, 3 (gap created), whereas DENSE_RANK() produces 1, 1, 2 (no gap).'
        },
        {
            id: 5,
            topic: 'Advanced SQL',
            question: 'In SQL window functions, what does the `PARTITION BY` clause do inside the `OVER()` clause?',
            options: [
                'It splits physical disk storage partitions across storage nodes',
                'It divides rows into distinct partitions over which the window function computes independently',
                'It deletes rows that do not meet partition conditions',
                'It reindexes the database primary keys'
            ],
            correct: 1,
            explanation: 'PARTITION BY splits the query result set into subsets (partitions) to which the window calculation is applied.'
        },
        {
            id: 6,
            topic: 'Advanced SQL',
            question: 'What is a Common Table Expression (CTE) in SQL defined with the `WITH` keyword?',
            options: [
                'A persistent table stored permanently in physical storage',
                'A temporary named result set that exists only within the execution scope of a single query',
                'An asynchronous background task triggered on database startup',
                'A user-defined scalar function compiled to bytecode'
            ],
            correct: 1,
            explanation: 'A CTE provides a readable, temporary named result set accessible within the execution scope of a SELECT, INSERT, UPDATE, or DELETE.'
        },

        // Topic: Normalization (3 questions)
        {
            id: 7,
            topic: 'Normalization',
            question: 'What condition must a relation satisfy to achieve First Normal Form (1NF)?',
            options: [
                'It must contain no partial functional dependencies',
                'All column values must be atomic (indivisible), and there must be no repeating groups or arrays',
                'Every non-key attribute must be non-transitively dependent on the primary key',
                'Every determinant must be a candidate key'
            ],
            correct: 1,
            explanation: '1NF requires that attributes contain only atomic (indivisible) values and each row is uniquely distinguishable.'
        },
        {
            id: 8,
            topic: 'Normalization',
            question: 'A table in 1NF is in Second Normal Form (2NF) if and only if:',
            options: [
                'It has no transitive dependencies on the primary key',
                'Every non-prime attribute is fully functionally dependent on the entire primary key (no partial dependency)',
                'Every multi-valued dependency is eliminated',
                'All foreign keys reference clustered indexes'
            ],
            correct: 1,
            explanation: '2NF removes partial functional dependencies where a non-prime attribute depends on only part of a composite candidate key.'
        },
        {
            id: 9,
            topic: 'Normalization',
            question: 'Which normal form is strictly stronger than 3NF and requires that for every functional dependency X -> Y, X must be a superkey?',
            options: ['2NF', 'Boyce-Codd Normal Form (BCNF)', '4NF', '5NF'],
            correct: 1,
            explanation: 'BCNF is a stricter version of 3NF eliminating anomalies caused by overlapping candidate keys; every determinant X must be a superkey.'
        },

        // Topic: NoSQL (3 questions)
        {
            id: 10,
            topic: 'NoSQL',
            question: 'What type of NoSQL database is MongoDB categorized as?',
            options: ['Key-Value Store', 'Document Store', 'Column-Family Store', 'Graph Database'],
            correct: 1,
            explanation: 'MongoDB stores data in flexible, JSON-like BSON documents, classifying it as a document-oriented database.'
        },
        {
            id: 11,
            topic: 'NoSQL',
            question: 'According to Eric Brewer\'s CAP Theorem, what are the three properties, of which a distributed system can guarantee at most two?',
            options: [
                'Capacity, Accessibility, Performance',
                'Consistency, Availability, Partition Tolerance',
                'Concurrency, Authentication, Persistence',
                'Clustering, Authorization, Parallelism'
            ],
            correct: 1,
            explanation: 'The CAP theorem states distributed data stores can provide at most two of Consistency, Availability, and Partition tolerance.'
        },
        {
            id: 12,
            topic: 'NoSQL',
            question: 'Which NoSQL data model is specifically optimized for traversing interconnected networks such as social graphs and recommendation engines?',
            options: ['Wide-column stores (Cassandra)', 'Document databases (CouchDB)', 'Graph databases (Neo4j)', 'Key-value caches (Redis)'],
            correct: 2,
            explanation: 'Graph databases use nodes, edges, and properties directly to deliver millisecond graph traversal without heavy JOIN queries.'
        },

        // Topic: Transactions (3 questions)
        {
            id: 13,
            topic: 'Transactions',
            question: 'What do the letters in the database acronym ACID represent?',
            options: [
                'Authentication, Concurrency, Isolation, Durability',
                'Atomicity, Consistency, Isolation, Durability',
                'Aggregation, Compression, Indexing, Decoupling',
                'Availability, Consistency, Integrity, Distribution'
            ],
            correct: 1,
            explanation: 'ACID stands for Atomicity (all-or-nothing), Consistency (rules respected), Isolation (independent transactions), and Durability (survives crashes).'
        },
        {
            id: 14,
            topic: 'Transactions',
            question: 'What phenomenon occurs when a transaction reads data modified by a concurrent uncommitted transaction that later rolls back?',
            options: ['Non-repeatable Read', 'Phantom Read', 'Dirty Read', 'Lost Update'],
            correct: 2,
            explanation: 'A Dirty Read occurs when Transaction A reads uncommitted modifications made by Transaction B which is subsequently rolled back.'
        },
        {
            id: 15,
            topic: 'Transactions',
            question: 'In Write-Ahead Logging (WAL) protocols, why must log records be written to non-volatile disk before database data pages are written?',
            options: [
                'To minimize physical RAM consumption',
                'To guarantee that transactions can be reliably redone or undone during recovery after a system crash',
                'To enforce primary key unique constraints faster',
                'To compress historical query plans'
            ],
            correct: 1,
            explanation: 'WAL ensures that recovery mechanisms have an immutable audit trail on stable storage to reconstruct or roll back changes upon failure.'
        }
    ],

    programming: [
        // Topic: Arrays & Strings (3 questions)
        {
            id: 1,
            topic: 'Arrays & Strings',
            question: 'What is the optimal average time complexity to find the length of the longest substring without repeating characters using the sliding window technique?',
            options: ['O(n^2)', 'O(n)', 'O(n log n)', 'O(1)'],
            correct: 1,
            explanation: 'The two-pointer sliding window with a hash set/map moves pointers from left to right in at most 2n steps, achieving linear O(n) time.'
        },
        {
            id: 2,
            topic: 'Arrays & Strings',
            question: 'In string searching, what preprocessing optimization allows the Knuth-Morris-Pratt (KMP) algorithm to avoid backtracking in the text string?',
            options: [
                'Sorting characters by ASCII values',
                'Constructing a Longest Prefix Suffix (LPS) array for the pattern',
                'Converting characters to MD5 hashes',
                'Generating a Huffman compression tree'
            ],
            correct: 1,
            explanation: 'The KMP algorithm constructs an LPS (pi) table to shift the pattern using known matching prefixes, eliminating text pointer backtracking.'
        },
        {
            id: 3,
            topic: 'Arrays & Strings',
            question: 'What is the Kadane algorithm specifically designed to find in an integer array in O(n) time?',
            options: [
                'The median element of an unsorted list',
                'The contiguous subarray with the largest sum',
                'The longest palindromic subsequence',
                'All pairs that sum up to zero'
            ],
            correct: 1,
            explanation: 'Kadane\'s dynamic programming algorithm finds the maximum subarray sum in a single linear scan O(n).'
        },

        // Topic: Linked Lists (3 questions)
        {
            id: 4,
            topic: 'Linked Lists',
            question: 'Which algorithm detects if a cycle exists in a singly linked list using O(1) auxiliary space?',
            options: [
                'Floyd\'s Tortoise and Hare (Two Pointer)',
                'Dijkstra\'s Shortest Path',
                'Tarjan\'s Strongly Connected Components',
                'Binary Search on nodes'
            ],
            correct: 0,
            explanation: 'Floyd\'s cycle-finding algorithm moves a slow pointer (1 step) and fast pointer (2 steps). If they meet, a cycle exists, using O(1) space.'
        },
        {
            id: 5,
            topic: 'Linked Lists',
            question: 'What is the time complexity to reverse a singly linked list of n nodes iteratively in-place?',
            options: ['O(n) time and O(n) space', 'O(n) time and O(1) space', 'O(n^2) time and O(1) space', 'O(log n) time and O(1) space'],
            correct: 1,
            explanation: 'Iterative reversal updates previous, current, and next pointers in a single pass of n nodes using three pointer variables O(1) space.'
        },
        {
            id: 6,
            topic: 'Linked Lists',
            question: 'What is the time complexity of deleting a node given only a direct pointer to that node in a singly linked list (assuming it is not the tail)?',
            options: ['O(n)', 'O(log n)', 'O(1)', 'O(n^2)'],
            correct: 2,
            explanation: 'You can copy the data from the next node into the current node and bypass node->next in O(1) constant time.'
        },

        // Topic: Trees & Graphs (3 questions)
        {
            id: 7,
            topic: 'Trees & Graphs',
            question: 'Which traversal of a Binary Search Tree (BST) produces node values in strictly sorted ascending order?',
            options: ['Pre-order (Root-Left-Right)', 'In-order (Left-Root-Right)', 'Post-order (Left-Right-Root)', 'Level-order (BFS)'],
            correct: 1,
            explanation: 'An in-order traversal of a BST visits left child (< root), then root, then right child (> root), outputting strictly sorted values.'
        },
        {
            id: 8,
            topic: 'Trees & Graphs',
            question: 'Which data structure is fundamentally utilized to implement Breadth-First Search (BFS) on an unweighted graph?',
            options: ['Stack (LIFO)', 'Queue (FIFO)', 'Min-Heap', 'Disjoint Set (Union-Find)'],
            correct: 1,
            explanation: 'BFS explores vertices level by level using a FIFO Queue to ensure vertices are visited in order of edge distance from source.'
        },
        {
            id: 9,
            topic: 'Trees & Graphs',
            question: 'What is the worst-case search time complexity in an un-balanced Binary Search Tree with n nodes?',
            options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
            correct: 2,
            explanation: 'When insertions occur in sorted order, an un-balanced BST degenerates into a linear linked list (skewed tree), causing worst-case O(n) lookups.'
        },

        // Topic: OOP (3 questions)
        {
            id: 10,
            topic: 'OOP',
            question: 'In Object-Oriented Programming, what is Polymorphism?',
            options: [
                'Hiding implementation details behind public method interfaces',
                'The ability of different classes to respond to the same method call in different ways based on their specific implementation',
                'Restricting a class to have exactly one instance globally',
                'Copying variables between two independent threads safely'
            ],
            correct: 1,
            explanation: 'Polymorphism (meaning "many forms") lets derived classes override base class methods or implement shared interfaces with custom behaviors.'
        },
        {
            id: 11,
            topic: 'OOP',
            question: 'What does the \'D\' stand for in the SOLID design principles?',
            options: ['Data Encapsulation Principle', 'Dependency Inversion Principle', 'Dynamic Binding Principle', 'Decoupled Inheritance Principle'],
            correct: 1,
            explanation: 'D stands for Dependency Inversion Principle: high-level modules should not depend on low-level modules; both should depend on abstractions.'
        },
        {
            id: 12,
            topic: 'OOP',
            question: 'What is the primary difference between method overloading and method overriding?',
            options: [
                'Overloading is runtime polymorphism; overriding is compile-time polymorphism',
                'Overloading happens in the same class with different method signatures; overriding occurs in a subclass replacing a superclass method with the same signature',
                'Overloading requires virtual keywords, while overriding does not',
                'Overloading is only permitted in functional languages'
            ],
            correct: 1,
            explanation: 'Method overloading defines methods with the same name but different signatures within the same class, whereas overriding redefines inherited methods.'
        },

        // Topic: Time Complexity (3 questions)
        {
            id: 13,
            topic: 'Time Complexity',
            question: 'What is the worst-case time complexity of the standard QuickSort algorithm with naive first-element pivot selection?',
            options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(2^n)'],
            correct: 2,
            explanation: 'When the array is already sorted or reverse-sorted and the first element is selected as pivot, partitions split into (n-1) and 0 elements, yielding O(n^2).'
        },
        {
            id: 14,
            topic: 'Time Complexity',
            question: 'According to the Master Theorem, what is the asymptotic solution to the recurrence relation `T(n) = 2T(n/2) + O(n)`?',
            options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(log n)'],
            correct: 1,
            explanation: 'This matches the standard divide-and-conquer recurrence (like MergeSort): a=2, b=2, k=1. Since log_b(a) = 1 = k, case 2 applies giving O(n log n).'
        },
        {
            id: 15,
            topic: 'Time Complexity',
            question: 'What is the tightest Big-O upper bound for inserting an item into a binary Min-Heap of size n?',
            options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
            correct: 1,
            explanation: 'The new element is appended at the bottom leaf and bubbled up along the tree height, which is bounded by O(log n).'
        }
    ],

    cloud: [
        // Topic: Cloud Basics (3 questions)
        {
            id: 1,
            topic: 'Cloud Basics',
            question: 'Which cloud service model provides consumer access to underlying virtual machines, storage, and networking without managing physical datacenters?',
            options: ['SaaS (Software as a Service)', 'PaaS (Platform as a Service)', 'IaaS (Infrastructure as a Service)', 'FaaS (Function as a Service)'],
            correct: 2,
            explanation: 'IaaS provides raw compute (VMs), storage, and networking where customers manage the OS, middleware, and applications.'
        },
        {
            id: 2,
            topic: 'Cloud Basics',
            question: 'What is the primary difference between horizontal scaling (scale-out) and vertical scaling (scale-up)?',
            options: [
                'Horizontal scaling adds more instances/machines, while vertical scaling adds more CPU/RAM to an existing machine',
                'Horizontal scaling upgrades database firmware, while vertical scaling installs load balancers',
                'Horizontal scaling reduces costs to zero when idle, while vertical scaling cannot',
                'Horizontal scaling is only compatible with bare-metal servers'
            ],
            correct: 0,
            explanation: 'Scale-out (horizontal) adds more server nodes to distribute work, whereas scale-up (vertical) upgrades hardware specifications on a single node.'
        },
        {
            id: 3,
            topic: 'Cloud Basics',
            question: 'In cloud architecture, what constitutes an "Availability Zone" (AZ)?',
            options: [
                'A software firewall rule grouping virtual networks',
                'One or more discrete physical data centers within a geographical region with redundant power, networking, and connectivity',
                'A CDN edge point of presence designed for static caching',
                'A single physical rack inside an office server room'
            ],
            correct: 1,
            explanation: 'An AZ is an isolated location within an AWS/Azure region featuring independent power, cooling, and network links to prevent joint failures.'
        },

        // Topic: AWS Services (3 questions)
        {
            id: 4,
            topic: 'AWS Services',
            question: 'Which AWS service is an event-driven, serverless computing platform that executes code in response to triggers without provisioning servers?',
            options: ['Amazon EC2', 'AWS Lambda', 'Amazon Lightsail', 'Amazon ECS'],
            correct: 1,
            explanation: 'AWS Lambda runs code on-demand in response to events (S3 uploads, API Gateway requests, SQS messages) without managing servers.'
        },
        {
            id: 5,
            topic: 'AWS Services',
            question: 'What is Amazon S3\'s core architectural storage paradigm?',
            options: ['Block Storage with fixed disk sectors', 'Object Storage with unique keys and metadata', 'Hierarchical POSIX File System', 'Relational Table Storage'],
            correct: 1,
            explanation: 'Amazon S3 is a scalable object storage service storing unstructured files with keys, metadata, and high durability (99.999999999%).'
        },
        {
            id: 6,
            topic: 'AWS Services',
            question: 'Which managed AWS database service supports automated patching, multi-AZ failover, and read replicas for MySQL, PostgreSQL, and SQL Server?',
            options: ['Amazon DynamoDB', 'Amazon RDS', 'Amazon Redshift', 'Amazon ElastiCache'],
            correct: 1,
            explanation: 'Amazon RDS (Relational Database Service) automates routine database management tasks for leading relational engines.'
        },

        // Topic: Docker (3 questions)
        {
            id: 7,
            topic: 'Docker',
            question: 'What fundamental Linux kernel features allow Docker containers to provide process isolation and resource limits?',
            options: [
                'Namespaces and Control Groups (cgroups)',
                'VirtualBox Hypervisors and VMX',
                'KVM and QEMU hardware emulation',
                'Swap partitions and Cron daemons'
            ],
            correct: 0,
            explanation: 'Namespaces provide isolation (PID, net, mnt, IPC), and cgroups meter/limit hardware resources (CPU, memory, I/O).'
        },
        {
            id: 8,
            topic: 'Docker',
            question: 'In a Dockerfile, what is the key difference between the `RUN` and `CMD` instructions?',
            options: [
                'RUN runs when the container starts; CMD executes during image build time',
                'RUN executes commands to build layers during image creation; CMD specifies the default command executed when the container starts',
                'RUN is for Windows containers only; CMD is for Linux containers only',
                'There is no difference; they are interchangeable aliases'
            ],
            correct: 1,
            explanation: 'RUN installs packages and prepares image layers at build time, while CMD defines the entry execution command when running containers.'
        },
        {
            id: 9,
            topic: 'Docker',
            question: 'Why are multi-stage Docker builds widely used in production containerization workflows?',
            options: [
                'They allow running multiple web servers inside a single container',
                'They separate build dependencies from the final lightweight runtime image, minimizing image attack surface and size',
                'They allow a single Dockerfile to run on both x86 and ARM simultaneously without cross-compilation',
                'They automatically deploy images directly to Kubernetes clusters'
            ],
            correct: 1,
            explanation: 'Multi-stage builds leave compiler SDKs and build tools in early stages, copying only the compiled artifacts into a tiny final base image.'
        },

        // Topic: CI/CD (3 questions)
        {
            id: 10,
            topic: 'CI/CD',
            question: 'In a modern DevOps pipeline, what is Continuous Integration (CI)?',
            options: [
                'Automatically pushing container images straight to live production servers without manual testing',
                'The practice of developers regularly merging code changes into a central repository, triggering automated builds and tests',
                'Running database migrations manually during scheduled maintenance windows',
                'Purchasing cloud computing credits automatically when CPU utilization exceeds 80%'
            ],
            correct: 1,
            explanation: 'CI automates building and testing code whenever revisions are committed, catching integration defects early.'
        },
        {
            id: 11,
            topic: 'CI/CD',
            question: 'What deployment strategy routes a small percentage (e.g. 5%) of live production traffic to a new release version before full rollout?',
            options: ['Blue-Green Deployment', 'Canary Deployment', 'Rolling Recreate', 'In-Place Overwrite'],
            correct: 1,
            explanation: 'Canary deployments expose a small subset of real users to the new version, verifying health and monitoring error rates before 100% rollout.'
        },
        {
            id: 12,
            topic: 'CI/CD',
            question: 'What is the purpose of GitOps tools like ArgoCD or Flux in Kubernetes cluster operations?',
            options: [
                'Writing git commit messages automatically using LLMs',
                'Using Git as the single source of truth to continuously synchronize desired cluster state with actual live cluster state',
                'Benchmarking network latency across container interfaces',
                'Generating Dockerfiles from source code automatically'
            ],
            correct: 1,
            explanation: 'GitOps maintains declarative infrastructure manifests in Git and continuously synchronizes the Kubernetes cluster to mirror the Git repo state.'
        },

        // Topic: Networking (3 questions)
        {
            id: 13,
            topic: 'Networking',
            question: 'In a cloud Virtual Private Cloud (VPC), what component is required to allow EC2 instances in a private subnet to initiate outbound internet traffic for security patches while denying inbound connections from the internet?',
            options: ['Internet Gateway (IGW)', 'NAT Gateway (Network Address Translation)', 'VPC Peering Connection', 'Transit Gateway'],
            correct: 1,
            explanation: 'A NAT Gateway allows instances in private subnets to reach out to the internet (e.g., yum update) while blocking external inbound connections.'
        },
        {
            id: 14,
            topic: 'Networking',
            question: 'What is the primary role of a Reverse Proxy (such as NGINX or AWS Application Load Balancer)?',
            options: [
                'Intercepting outbound client requests to enforce corporate web browsing filters',
                'Positioned in front of backend servers to route incoming client requests, handle SSL/TLS termination, and balance load',
                'Assigning dynamic IP addresses to home Wi-Fi routers using DHCP',
                'Encrypting hard drives on physical database hardware'
            ],
            correct: 1,
            explanation: 'A reverse proxy sits between external clients and internal backend services, managing TLS termination, load distribution, and routing.'
        },
        {
            id: 15,
            topic: 'Networking',
            question: 'In the OSI and TCP/IP models, at which layer does an HTTP/HTTPS Application Load Balancer (ALB) operate compared to a Network Load Balancer (NLB)?',
            options: [
                'ALB operates at Layer 7 (Application); NLB operates at Layer 4 (Transport)',
                'ALB operates at Layer 2 (Data Link); NLB operates at Layer 3 (Network)',
                'ALB operates at Layer 4 (Transport); NLB operates at Layer 7 (Application)',
                'Both operate exclusively at Layer 3 (Network)'
            ],
            correct: 0,
            explanation: 'ALB parses HTTP/HTTPS headers, paths, and cookies at Layer 7; NLB handles ultra-fast TCP/UDP socket traffic at Layer 4.'
        }
    ]
};

const COURSES = {
    webdev: {
        'HTML': [
            { id: 'wh1', name: 'HTML & CSS for Beginners', platform: 'freeCodeCamp', url: 'https://freecodecamp.org', duration: '3 hours', level: 'Beginner' },
            { id: 'wh2', name: 'Advanced HTML5 Semantics & Web Accessibility', platform: 'Udemy', url: 'https://udemy.com', duration: '5 hours', level: 'Intermediate' }
        ],
        'CSS': [
            { id: 'wc1', name: 'Modern CSS Flexbox, Grid & Animations', platform: 'Coursera', url: 'https://coursera.org', duration: '6 hours', level: 'Intermediate' },
            { id: 'wc2', name: 'Tailwind CSS From Scratch', platform: 'freeCodeCamp', url: 'https://freecodecamp.org', duration: '4 hours', level: 'Beginner' }
        ],
        'JavaScript': [
            { id: 'wj1', name: 'JavaScript Deep Dive: Async, Promises & Closures', platform: 'Frontend Masters', url: 'https://frontendmasters.com', duration: '8 hours', level: 'Intermediate' },
            { id: 'wj2', name: 'Modern ES6+ JavaScript Bootcamp', platform: 'Udemy', url: 'https://udemy.com', duration: '12 hours', level: 'Beginner' }
        ],
        'React': [
            { id: 'wr1', name: 'React 18 Complete Guide & Hooks In-Depth', platform: 'Udemy', url: 'https://udemy.com', duration: '15 hours', level: 'Intermediate' },
            { id: 'wr2', name: 'Full-Stack React & Next.js Architecture', platform: 'Coursera', url: 'https://coursera.org', duration: '10 hours', level: 'Advanced' }
        ],
        'Node.js': [
            { id: 'wn1', name: 'Node.js, Express & MongoDB Masterclass', platform: 'Udemy', url: 'https://udemy.com', duration: '14 hours', level: 'Intermediate' },
            { id: 'wn2', name: 'Building Scalable REST & GraphQL APIs with Node', platform: 'Pluralsight', url: 'https://pluralsight.com', duration: '7 hours', level: 'Advanced' }
        ]
    },

    datascience: {
        'Python Basics': [
            { id: 'dp1', name: 'Python for Everybody Specialization', platform: 'Coursera', url: 'https://coursera.org', duration: '12 hours', level: 'Beginner' },
            { id: 'dp2', name: 'Advanced Python OOP & Data Structures', platform: 'freeCodeCamp', url: 'https://freecodecamp.org', duration: '6 hours', level: 'Intermediate' }
        ],
        'Statistics': [
            { id: 'ds1', name: 'Inferential Statistics & Hypothesis Testing', platform: 'Coursera', url: 'https://coursera.org', duration: '8 hours', level: 'Intermediate' },
            { id: 'ds2', name: 'Practical Statistics for Data Scientists', platform: 'Udemy', url: 'https://udemy.com', duration: '7 hours', level: 'Beginner' }
        ],
        'Pandas': [
            { id: 'da1', name: 'Data Manipulation with Pandas & NumPy', platform: 'DataCamp', url: 'https://datacamp.com', duration: '5 hours', level: 'Beginner' },
            { id: 'da2', name: 'High-Performance Data Analysis with Pandas', platform: 'Udemy', url: 'https://udemy.com', duration: '6 hours', level: 'Intermediate' }
        ],
        'Data Visualization': [
            { id: 'dv1', name: 'Storytelling with Matplotlib & Seaborn', platform: 'freeCodeCamp', url: 'https://freecodecamp.org', duration: '4 hours', level: 'Beginner' },
            { id: 'dv2', name: 'Interactive Dashboards with Plotly & Dash', platform: 'Coursera', url: 'https://coursera.org', duration: '6 hours', level: 'Intermediate' }
        ],
        'ML Basics': [
            { id: 'dm1', name: 'Machine Learning Specialization (Andrew Ng)', platform: 'Coursera', url: 'https://coursera.org', duration: '20 hours', level: 'Beginner' },
            { id: 'dm2', name: 'Applied Scikit-Learn: Classification & Regression', platform: 'Udemy', url: 'https://udemy.com', duration: '10 hours', level: 'Intermediate' }
        ]
    },

    dbms: {
        'SQL Basics': [
            { id: 'ms1', name: 'The Complete SQL Bootcamp: Go from Zero to Hero', platform: 'Udemy', url: 'https://udemy.com', duration: '9 hours', level: 'Beginner' },
            { id: 'ms2', name: 'SQL for Data Analytics and Querying', platform: 'Coursera', url: 'https://coursera.org', duration: '6 hours', level: 'Beginner' }
        ],
        'Advanced SQL': [
            { id: 'ma1', name: 'Advanced SQL: Window Functions & Recursive CTEs', platform: 'DataCamp', url: 'https://datacamp.com', duration: '5 hours', level: 'Advanced' },
            { id: 'ma2', name: 'Database Query Optimization & Index Tuning', platform: 'Pluralsight', url: 'https://pluralsight.com', duration: '7 hours', level: 'Advanced' }
        ],
        'Normalization': [
            { id: 'mn1', name: 'Relational Database Design & Normalization (1NF to BCNF)', platform: 'Udemy', url: 'https://udemy.com', duration: '4 hours', level: 'Intermediate' },
            { id: 'mn2', name: 'Database Schema Architecture for Scalable Apps', platform: 'Coursera', url: 'https://coursera.org', duration: '5 hours', level: 'Intermediate' }
        ],
        'NoSQL': [
            { id: 'mo1', name: 'MongoDB - The Complete Developer\'s Guide', platform: 'Udemy', url: 'https://udemy.com', duration: '12 hours', level: 'Beginner' },
            { id: 'mo2', name: 'Distributed NoSQL Architectures with Cassandra & DynamoDB', platform: 'Coursera', url: 'https://coursera.org', duration: '8 hours', level: 'Advanced' }
        ],
        'Transactions': [
            { id: 'mt1', name: 'Transaction Management, Concurrency & ACID in Practice', platform: 'Pluralsight', url: 'https://pluralsight.com', duration: '6 hours', level: 'Intermediate' },
            { id: 'mt2', name: 'Distributed Transactions & Consensus Mechanisms', platform: 'edX', url: 'https://edx.org', duration: '8 hours', level: 'Advanced' }
        ]
    },

    programming: {
        'Arrays & Strings': [
            { id: 'pa1', name: 'Two-Pointer & Sliding Window Problem Solving', platform: 'freeCodeCamp', url: 'https://freecodecamp.org', duration: '5 hours', level: 'Intermediate' },
            { id: 'pa2', name: 'Mastering String Algorithms & Bit Manipulation', platform: 'Udemy', url: 'https://udemy.com', duration: '7 hours', level: 'Intermediate' }
        ],
        'Linked Lists': [
            { id: 'pl1', name: 'Singly, Doubly & Circular Linked List Mastery', platform: 'GeeksforGeeks', url: 'https://geeksforgeeks.org', duration: '4 hours', level: 'Beginner' },
            { id: 'pl2', name: 'Advanced Pointer Techniques in Data Structures', platform: 'Udemy', url: 'https://udemy.com', duration: '6 hours', level: 'Intermediate' }
        ],
        'Trees & Graphs': [
            { id: 'pt1', name: 'Binary Trees, BSTs & AVL Tree Implementations', platform: 'Coursera', url: 'https://coursera.org', duration: '8 hours', level: 'Intermediate' },
            { id: 'pt2', name: 'Graph Algorithms: BFS, DFS, Dijkstra & Topological Sort', platform: 'freeCodeCamp', url: 'https://freecodecamp.org', duration: '10 hours', level: 'Advanced' }
        ],
        'OOP': [
            { id: 'po1', name: 'Object-Oriented Design & SOLID Principles in Practice', platform: 'Udemy', url: 'https://udemy.com', duration: '6 hours', level: 'Intermediate' },
            { id: 'po2', name: 'Design Patterns in Modern Software Engineering', platform: 'Coursera', url: 'https://coursera.org', duration: '8 hours', level: 'Advanced' }
        ],
        'Time Complexity': [
            { id: 'pc1', name: 'Asymptotic Analysis & Big-O Notation Simplified', platform: 'freeCodeCamp', url: 'https://freecodecamp.org', duration: '3 hours', level: 'Beginner' },
            { id: 'pc2', name: 'Master Theorem & Recurrence Relations for MCA/GATE', platform: 'YouTube/NPTEL', url: 'https://nptel.ac.in', duration: '5 hours', level: 'Intermediate' }
        ]
    },

    cloud: {
        'Cloud Basics': [
            { id: 'cb1', name: 'Introduction to Cloud Computing Concepts', platform: 'Coursera', url: 'https://coursera.org', duration: '4 hours', level: 'Beginner' },
            { id: 'cb2', name: 'Cloud Architecture Principles & High Availability', platform: 'edX', url: 'https://edx.org', duration: '6 hours', level: 'Intermediate' }
        ],
        'AWS Services': [
            { id: 'ca1', name: 'AWS Certified Cloud Practitioner Ultimate Training', platform: 'Udemy', url: 'https://udemy.com', duration: '12 hours', level: 'Beginner' },
            { id: 'ca2', name: 'AWS Solutions Architect Associate Deep Dive', platform: 'A Cloud Guru', url: 'https://acloudguru.com', duration: '18 hours', level: 'Intermediate' }
        ],
        'Docker': [
            { id: 'cd1', name: 'Docker Mastery: with Kubernetes + Swarm', platform: 'Udemy', url: 'https://udemy.com', duration: '9 hours', level: 'Intermediate' },
            { id: 'cd2', name: 'Containerization & Multi-Stage Builds Crash Course', platform: 'freeCodeCamp', url: 'https://freecodecamp.org', duration: '4 hours', level: 'Beginner' }
        ],
        'CI/CD': [
            { id: 'cc1', name: 'GitHub Actions & Modern CI/CD Workflows', platform: 'freeCodeCamp', url: 'https://freecodecamp.org', duration: '5 hours', level: 'Beginner' },
            { id: 'cc2', name: 'DevOps Engineering: Jenkins, GitOps & Canary Deployments', platform: 'Udemy', url: 'https://udemy.com', duration: '11 hours', level: 'Advanced' }
        ],
        'Networking': [
            { id: 'cn1', name: 'Cloud VPC Networking, Subnets & Routing Tables', platform: 'Pluralsight', url: 'https://pluralsight.com', duration: '6 hours', level: 'Intermediate' },
            { id: 'cn2', name: 'Web Server Architecture: NGINX, Load Balancers & TLS', platform: 'Coursera', url: 'https://coursera.org', duration: '7 hours', level: 'Intermediate' }
        ]
    }
};

// Helper Functions
function getDomainById(id) {
    return DOMAINS.find(d => d.id === id);
}

function getQuestionsForDomain(domainId) {
    return QUESTIONS[domainId] || [];
}

function getCoursesForDomain(domainId) {
    return COURSES[domainId] || {};
}

function getCoursesForTopic(domainId, topic) {
    const domainCourses = COURSES[domainId];
    return domainCourses ? (domainCourses[topic] || []) : [];
}
