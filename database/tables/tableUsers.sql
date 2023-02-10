-- Create a new table called 'users' in schema 'dbo'
-- Drop the table if it already exists
IF OBJECT_ID('dbo.users', 'U') IS NOT NULL
DROP TABLE dbo.users
GO
-- Create the table in the specified schema
CREATE TABLE dbo.users
(
    userId [VARCHAR](100) UNIQUE, 
    name [VARCHAR](100),
    email [VARCHAR](100) UNIQUE,
    Password [VARCHAR](150) ,
);
GO

-- CREATE PROCEDURE RegisterUser(@id VARCHAR(100), @name VARCHAR(200),@email VARCHAR(300) ,@password VARCHAR(150))
-- AS
-- BEGIN
-- INSERT INTO UserTable(Id,Name,Email,Password)
-- VALUES(@id,@name,@email,@password)

-- END

