<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Prueba extends CI_Controller
{

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */




	public function __construct()
	{
		parent::__construct();
	}


	public function index()
	{
		$this->load->view('/prueba/ejemplouno');
	
	}
	public function dos()
	{
		$this->load->view('/prueba/ejemplodos');
	
	}

	public function tres()
	{
		$this->load->view('/prueba/ejemplotres');
	
	}
	public function cuatro()
	{
		$this->load->view('/prueba/ejemplocuatro');
	
	}
	public function cinco()
	{
		$this->load->view('/prueba/ejemplocinco');
	
	}

	public function seis()
	{
		$this->load->view('/prueba/ejemploseis');
	
	}
	public function siete()
	{
		$this->load->view('/prueba/ejemplosiete');
	
	}
	public function oco()
	{
		$this->load->view('/prueba/ejemplo8');
	
	}
	public function nueve()
	{
		$this->load->view('/prueba/ejemplo9');
	
	}

}
