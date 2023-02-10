IF EXISTS (
SELECT *
    FROM INFORMATION_SCHEMA.ROUTINES
WHERE SPECIFIC_SCHEMA = N'dbo'
    AND SPECIFIC_NAME = N'updatePassword'
)
DROP PROCEDURE dbo.updatePassword
GO
-- Create the stored procedure in the specified schema
CREATE PROCEDURE dbo.updatePassword
    @userId VARCHAR(100),
    @Password VARCHAR(100)

AS
BEGIN

SELECT * FROM users

IF EXISTS(SELECT * FROM users WHERE userId =@userId)
BEGIN
UPDATE users SET [Password]=@Password

WHERE userId=@userId

END

END

