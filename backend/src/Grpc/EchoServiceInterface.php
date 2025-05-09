<?php

namespace App\Grpc;

use Spiral\GRPC\Context;
use App\Protos\PingRequest;


interface EchoServiceInterface
{
    public function ping(Context $ctx, PingRequest $in);
}