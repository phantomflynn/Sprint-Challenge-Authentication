<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

    * middleware are methods that sit between a client request and the appropriate response 

    * sessions are a way to persist data across requests

    * bcrypt is a password hashing method utilized for enhanced web security 

    * jwt aka json web tokens are unique keys given to a client upon successful authentication, giving the client access to restricted domains 

2.  What does bcrypt do in order to prevent attacks?

    * bcrypt encrypts client passwords via hashing. this allows passwords to be stored as encrypted rather than plain text. bcrypt is a one-way hashing algo; thus, an encrypted password cannot be decrypted (without secret), it can only be compared to another hashed string.

3.  What are the three parts of the JSON Web Token?

    * header, payload, signature 