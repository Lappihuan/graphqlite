<?php


namespace TheCodingMachine\GraphQLite\Fixtures\MutationNamespaces\Controllers;


use TheCodingMachine\GraphQLite\Annotations\MuatationNamespace;
use TheCodingMachine\GraphQLite\Annotations\Mutation;
use TheCodingMachine\GraphQLite\Annotations\Query;
use TheCodingMachine\GraphQLite\Types\ID;


/**
 * @MuatationNamespace()
 */
class UserController
{
    /**
     * @Query()
     */
    public function user(ID $id): ID
    {
        return new ID("myID");
    }

    /**
     * @Mutation()
     */
    public function create(ID $id): ID
    {
        return new ID("myID");
    }

    /**
     * @Mutation()
     */
    public function update(ID $id): ID
    {
        return new ID("myID");
    }

    /**
     * @Mutation()
     */
    public function delete(ID $id): ID
    {
        return new ID("myID");
    }
}
