# Database Notes

## CRUD

| Operation        | SQL     | HTTP            | 
| ---------------- | ------- | --------------- | 
| Create           | INSERT  | PUT/POST        |
| Read (Retrieve)  | SELECT  | GET             |
| Update (Modify)  | UPDATE  | PUT/POST/PATCH  |
| Delete (Destroy) | DELETE  | DELETE          |

## Classifications
1.  Relational
    * a collection of data items with pre-defined relationships between them.
    * normalizes data into tabular structures known as tables, which consist of rows and columns.
    * designed to scale "up" with faster hardware, need additional investment for distributed system
    * examples: MySQL, PostgreSQL, SQLite3
    * typically part of LAMP stack (Linux, Apache, MySQL, PHP/ Python/ Perl).
2.  Non-relational
    * not using relational model
    * typically do not enforce a schema
    * typically compromises consistency in favor of availability and partition tolerance (see CAP theorem)
    * run well on distributed clusters for scaling "out"
    * examples: MongoDB, HBase, Cassandra, Redis, Neo4j
    * typically part of MEAN/MEEN/MERN stack (MongoDB, Express, Angular/Ember/React, Node)

References:
* [What is a Relational Database? (AWS)](https://aws.amazon.com/relational-database/)
* [NoSQL Overview (Thoughtworks)](https://www.thoughtworks.com/insights/blog/nosql-databases-overview)
* [SQL vs NoSQL Table (AWS)](https://aws.amazon.com/nosql/?nc1=f_cc)
* [Relational vs Non-relational (Pluralsight)](https://www.pluralsight.com/blog/software-development/relational-non-relational-databases)
* [Relational vs Non-relational (James Serra)](http://www.jamesserra.com/archive/2015/08/relational-databases-vs-non-relational-databases/)

## Data Models
1. Column stores
    * optimized for reading and writing columns of data as opposed to rows of data.
    * ignores columns not reference by current query
    * minimizes I/O and throughput
    * slow to write, fast to read
    * Cassandra, Redshift, HBase, Hypertable
2.  Document
    * designed to store semi-structured data as documents, typically in JSON or XML format.
    * MongoDB, DynamoDB, CouchDB, OrientDB
3.  Graph
    * stores vertices and directed links called edges. Graphs can be built on relational (SQL) and non-relational (NoSQL) databases.
    * Neo4j
4.  In-memory key-value stores
    * simplest model
    * Riak, Redis

References:
* [NoSQL Data Models](https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/)

## Data Structures
Heap structure
?

## Elements
Data Lake
* a data pool in which schema and requirements are not defined until the data is queried.

Data Warehouse (Apache Hive, Redshift)

Transactional Database

## Schema
Snowflake

## Database Models

Massively Parellel Processing (MPP) Database

Online Analytical Processing (OLAP) Database

## Terminology
* Extract, transform, load (ETL)
* Time to live (TTL) - allows you to define when items in a table expire so that they can be automatically deleted from the database.
* Atomicity, Consistency, Isolation, Durability (ACID)
* Shared-nothing architecture 
* Batch processing
* Streaming processing
    * [Kafka, Kinesis](https://medium.com/aws-activate-startup-blog/the-tale-of-two-messaging-platforms-apache-kafka-and-amazon-kinesis-654963bdbf35)
* CAP theorem (consistency, availability, partition tolerance)

## Redshift
* leader nodes -- compute nodes 
* nodes contain slices, accessed by key

## Kinesis
### Streams
* Real-time processing of streaming data
* for workloads requiring custom processing

### Firehose
* load streaming data to S3 and Redshift
* for workloads requiring zero admin
* allows use of analytics tools based on S3, Elasticsearch, Redshift
1. Delivery stream - 
2. Records - data producer sends data blobs (records) to delivery stream
3. Data producers: producers sent records to delivery stream 
