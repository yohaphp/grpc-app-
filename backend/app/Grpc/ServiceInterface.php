<?php

namespace App\Grpc;

use Spiral\GRPC\ServiceInterface;

class EchoService implements ServiceInterface
{
    public function getServiceDefinition(): array
    {
        // Return the service definition array
        return [];
    }
}