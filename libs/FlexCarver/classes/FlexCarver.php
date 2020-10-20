<?php

/**
 * 
 */
class FlexCarver
{
  
  public var $config;


  function __construct()
  {
    // Load the main config file
    $this->config = json_encode( file_get_contents('config.json') );
    



  }


}
