-- Create a new stored procedure called 'getUserByName' in schema 'dbo'
-- Drop the stored procedure if it already exists
IF EXISTS (
SELECT *
    FROM INFORMATION_SCHEMA.ROUTINES
WHERE SPECIFIC_SCHEMA = N'dbo'
    AND SPECIFIC_NAME = N'getUserByName'
)
DROP PROCEDURE dbo.getUserByName
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.getUserByName 
    @name VARCHAR(300) 
AS
    BEGIN
        SELECT * FROM users WHERE name=@name
    END
GO