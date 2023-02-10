-- Create a new stored procedure called 'createUser' in schema 'dbo'
-- Drop the stored procedure if it already exists
IF EXISTS (
SELECT *
    FROM INFORMATION_SCHEMA.ROUTINES
WHERE SPECIFIC_SCHEMA = N'dbo'
    AND SPECIFIC_NAME = N'createUser'
)
DROP PROCEDURE dbo.createUser
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.createUser
    @userId VARCHAR(100),
    @name VARCHAR(300),
    @email VARCHAR(300),
    @Password VARCHAR(100)

   
AS
    BEGIN
        INSERT INTO users(userId,name,email,Password)
        VALUES(@userId,@name,@email,@Password)
    END
GO